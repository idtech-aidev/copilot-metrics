const mockTransformedData = {
  date: "2024-11-23",
  total_active_users: 1500,
  total_engaged_users: 750,
  copilotUsage: {
    ideCodeCompletions: {
      total_engaged_users: 600,
      languages: [
        { name: "JavaScript", total_engaged_users: 300 },
        { name: "Python", total_engaged_users: 200 },
        { name: "Java", total_engaged_users: 100 }
      ],
      editors: [
        {
          name: "Visual Studio Code",
          total_engaged_users: 500,
          models: [
            {
              name: "default",
              is_custom_model: false,
              custom_model_training_date: null,
              total_engaged_users: 400,
              languages: [
                {
                  name: "JavaScript",
                  total_engaged_users: 200,
                  total_code_suggestions: 5000,
                  total_code_acceptances: 4500,
                  total_code_lines_suggested: 15000,
                  total_code_lines_accepted: 13500
                },
                {
                  name: "Python",
                  total_engaged_users: 150,
                  total_code_suggestions: 3000,
                  total_code_acceptances: 2700,
                  total_code_lines_suggested: 9000,
                  total_code_lines_accepted: 8100
                }
              ]
            },
            {
              name: "custom-model-1",
              is_custom_model: true,
              custom_model_training_date: "2024-10-01",
              total_engaged_users: 100,
              languages: [
                {
                  name: "Java",
                  total_engaged_users: 100,
                  total_code_suggestions: 2000,
                  total_code_acceptances: 1800,
                  total_code_lines_suggested: 6000,
                  total_code_lines_accepted: 5400
                }
              ]
            }
          ]
        },
        {
          name: "IntelliJ IDEA",
          total_engaged_users: 100,
          models: [
            {
              name: "default",
              is_custom_model: false,
              custom_model_training_date: null,
              total_engaged_users: 80,
              languages: [
                {
                  name: "Java",
                  total_engaged_users: 80,
                  total_code_suggestions: 1000,
                  total_code_acceptances: 900,
                  total_code_lines_suggested: 3000,
                  total_code_lines_accepted: 2700
                }
              ]
            }
          ]
        }
      ]
    },
    copilotDotcomChat: {
      total_engaged_users: 500,
      models: [
        {
          name: "default",
          is_custom_model: false,
          custom_model_training_date: null,
          total_engaged_users: 480,
          total_chats: 10000,
          total_chat_insertion_events: 9000,
          total_chat_copy_events: 8500
        }
      ]
    },
    copilotDotcomPullRequests: {
      total_engaged_users: 250,
      repositories: [
        {
          name: "repo-1",
          total_engaged_users: 150,
          models: [
            {
              name: "default",
              is_custom_model: false,
              custom_model_training_date: null,
              total_pr_summaries_created: 300,
              total_engaged_users: 150
            }
          ]
        },
        {
          name: "repo-2",
          total_engaged_users: 100,
          models: [
            {
              name: "custom-model-1",
              is_custom_model: true,
              custom_model_training_date: "2024-09-20",
              total_pr_summaries_created: 200,
              total_engaged_users: 100
            }
          ]
        }
      ]
    }
  }
};

module.exports = { mockTransformedData }; 