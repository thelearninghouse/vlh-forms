const programsArray = [
  {
    id: "7cf6c854-ec67-42d7-81eb-4556bc539800",
    account_id: "1e06190d-80cb-48e8-8f70-b9fbf833f57a",
    name: "Associate of Arts (Online)",
    display_name: "Associate of Arts (Online)",
    degree_level: "Associate",
    modality: "Fully Online",
    status: "Active",
    marketing_active: true,
    elc: true,
    created: {
      date: "2017-07-10 19:49:27.000000",
      timezone_type: 3,
      timezone: "UTC"
    },
    modified: {
      date: "2017-07-10 19:49:27.000000",
      timezone_type: 3,
      timezone: "UTC"
    },
    tags: { data: [] },
    tagNames: ["Tag 2"]
  },
  {
    id: "ca691ea1-b301-4a9a-9bdf-8f9ff86d0870",
    account_id: "1e06190d-80cb-48e8-8f70-b9fbf833f57a",
    name: "Associate of Arts in Early Childhood (Online)",
    display_name: "Associate of Arts in Early Childhood (Online)",
    degree_level: "Associate",
    modality: "Fully Online",
    status: "Active",
    marketing_active: true,
    elc: true,
    created: {
      date: "2017-07-10 19:49:27.000000",
      timezone_type: 3,
      timezone: "UTC"
    },
    modified: {
      date: "2017-07-10 19:49:27.000000",
      timezone_type: 3,
      timezone: "UTC"
    },
    tags: { data: [] },
    tagNames: ["Tag 1"]
  },
  {
    id: "678baf4c-d757-437c-b820-a61800e717c7",
    account_id: "1e06190d-80cb-48e8-8f70-b9fbf833f57a",
    name: "B.A. in Health Care Administration",
    display_name: "B.A. in Health Care Administration",
    degree_level: "Bachelor",
    modality: "Fully Online",
    status: "Active",
    marketing_active: true,
    elc: true,
    created: {
      date: "2017-07-10 19:49:21.000000",
      timezone_type: 3,
      timezone: "UTC"
    },
    modified: {
      date: "2017-07-10 19:49:21.000000",
      timezone_type: 3,
      timezone: "UTC"
    },
    tags: { data: [] },
    tagNames: ["Tag 1"]
  },
  {
    id: "52a5da0c-2d5d-4236-a594-b3c4ae0a6ecc",
    account_id: "1e06190d-80cb-48e8-8f70-b9fbf833f57a",
    name:
      "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt psum dolor sit amet consectetur adipisicing elit",
    display_name:
      "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt psum dolor sit amet consectetur adipisicing elit",
    degree_level: "Bachelor",
    modality: "Fully Online",
    status: "Active",
    marketing_active: true,
    elc: true,
    created: {
      date: "2017-07-10 19:49:21.000000",
      timezone_type: 3,
      timezone: "UTC"
    },
    modified: {
      date: "2017-07-10 19:49:21.000000",
      timezone_type: 3,
      timezone: "UTC"
    },
    tags: { data: [] },
    tagNames: ["Tag 1"]
  },
  {
    id: "401d9841-db47-46f9-8c89-1dc1e1acc9f1",
    account_id: "1e06190d-80cb-48e8-8f70-b9fbf833f57a",
    name: "M.A. in Sports Management",
    display_name: "M.A. in Sports Management",
    degree_level: "Master",
    modality: "Fully Online",
    status: "Active",
    marketing_active: true,
    elc: true,
    created: {
      date: "2017-07-10 19:49:21.000000",
      timezone_type: 3,
      timezone: "UTC"
    },
    modified: {
      date: "2017-07-10 19:49:21.000000",
      timezone_type: 3,
      timezone: "UTC"
    },
    tags: { data: [] },
    tagNames: ["Tag 2"]
  }
];
const uniqueArray = originalArray => [...new Set(originalArray)];

const createTagsList = postsArray => {
  const tagsArray = [];
  postsArray.forEach(post => {
    if (post.tagsName.length) {
      post.tagsName.forEach(tag => tagsArray.push(tag));
    }
  });
  return uniqueArray(tagsArray);
};

const getPostsFromTag = (posts, tag) =>
  posts.filter(post => post.tagNames.includes(tag));

function createProgramsGroupsArray() {
  const programsGroups = [];
  const tagList = createTagsList(programsArray);

  tagList.forEach(tag => {
    const programsForTag = getPostsFromTag(programsArray, tag);
    programsGroups.push({
      label: tag,
      programs: programsForTag
    });
  });
  return programsGroups;
}
