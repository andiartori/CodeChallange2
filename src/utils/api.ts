import { randomUserApi, cmsApi, cmsCdn } from "@/utils/axiosInterface";

const CMS_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CMS_ACCESS_TOKEN;
const CMS_MANAGEMENT_TOKEN = process.env.NEXT_PUBLIC_CMS_MANAGEMENT_TOKEN;

export type Entries = {
	spaceId: string;
	environmentId: "master" | "staging";
};
export async function getAllEntries(entry: Entries) {
	const response = await cmsCdn.get(
		`/spaces/${entry.spaceId}/environments/${entry.environmentId}/entries?access_token=${CMS_ACCESS_TOKEN}`
	);
	return response.data;
}

export async function getTeams() {
	const response = await randomUserApi.get("/api/?results=3");
	return response.data;
}

export async function getTeamsForSweet() {
	const response2 = await randomUserApi.get("/api/?results=3");
	return response2.data;
}

export async function deleteMenuEntries(
	entryId: string,
	spaceId: string,
	environmentId: string
) {
	const response = await cmsApi.delete(
		`/spaces/${spaceId}/environments/${environmentId}/entries/${entryId}/published`,
		{
			headers: {
				Authorization: `Bearer ${CMS_MANAGEMENT_TOKEN}`,
				"Content-Type": "application/vnd.contentful.management.v1+json",
			},
		}
	);
	return response.data;
}

export async function addAndPublishMenuEntry(
	spaceId: string,
	environmentId: string,
	entryData: {
	  name: string;
	  description: string;
	  price: number;
	  category: string[];
	  isAvailable: boolean;
	  imageId: string;
	},
	delay: number = 5000 // Default delay of 1 second
  ) {
	// Step 1: Create the entry
	const createResponse = await cmsApi.post(
	  `/spaces/${spaceId}/environments/${environmentId}/entries`,
	  {
		fields: {
		  name: {
			'en-US': entryData.name,
		  },
		  description: {
			'en-US': entryData.description,
		  },
		  price: {
			'en-US': entryData.price,
		  },
		  category: {
			'en-US': entryData.category,
		  },
		  isAvailable: {
			'en-US': entryData.isAvailable,
		  },
		  image: {
			'en-US': {
			  sys: {
				type: 'Link',
				linkType: 'Asset',
				id: entryData.imageId,
			  },
			},
		  },
		},
	  },
	  {
		headers: {
		  Authorization: `Bearer ${CMS_MANAGEMENT_TOKEN}`,
		  'Content-Type': 'application/vnd.contentful.management.v1+json',
		  'X-Contentful-Content-Type': 'menu', // Replace 'menu' with your actual content type ID
		},
	  }
	);
  
	const entry = createResponse.data;
  
	// Step 2: Introduce a delay before publishing the entry
	await new Promise((resolve) => setTimeout(resolve, delay));
  
	// Step 3: Publish the entry using the returned sys.version
	const publishResponse = await cmsApi.put(
	  `/spaces/${spaceId}/environments/${environmentId}/entries/${entry.sys.id}/published`,
	  {},
	  {
		headers: {
		  Authorization: `Bearer ${CMS_MANAGEMENT_TOKEN}`,
		  'X-Contentful-Version': entry.sys.version, // Use version from the create response
		},
	  }
	);
  
	return publishResponse.data;
  }
  