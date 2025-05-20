export default {
  name: 'project',
  type: 'document',
  title: 'Design Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Project Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Cover Image',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'id',
      type: 'string',
      title: 'Project ID',
    },
    {
      name: 'userClass',
      type: 'string',
      title: 'User Class',
    },
    {
      name: 'years',
      type: 'string',
      title: 'Year',
    },
    {
      name: 'multiImages',
      type: 'array',
      title: 'Gallery Images',
      of: [{type: 'image'}],
    },
    {
      name: 'descriptionTitle',
      type: 'string',
      title: 'Description Title',
    },
    {
      name: 'description',
      type: 'object',
      title: 'Detailed Description',
      fields: [
        {
          name: 'ProjectOverview',
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'content', type: 'text', title: 'Content'},
          ],
        },
        {
          name: 'ConceptObjective',
          type: 'object',
          title: 'Concept & Objective',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'content', type: 'text', title: 'Content'},
          ],
        },
        {
          name: 'DesignProcess',
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {
              name: 'content',
              type: 'array',
              title: 'Process Steps',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'title', type: 'string', title: 'Step Title'},
                    {name: 'content', type: 'text', title: 'Step Detail'},
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'ResearchInspiration',
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'content', type: 'text', title: 'Content'},
          ],
        },
        {
          name: 'ProjectHighlights',
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {
              name: 'content',
              type: 'array',
              title: 'Highlights',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'title', type: 'string', title: 'Highlight Title'},
                    {name: 'content', type: 'text', title: 'Highlight Detail'},
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'conclusion',
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'content', type: 'text', title: 'Conclusion Text'},
          ],
        },
      ],
    },
  ],
}
