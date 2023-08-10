import { IAMClient,  CreatePolicyCommand } from "@aws-sdk/client-iam";

const iam = new IAMClient({
  region: "us-west-1",
  credentials: {
    accessKeyId: `your_aws_creds`,
    secretAccessKey: `your_aws_creds`,
    sessionToken: `your_aws_creds`
  },
});

const policyJson = `YOUR_POLICY_IN_JSON_FORMAT`;

const input = { // CreatePolicyRequest
  PolicyName: "your_policy_name", // required
  // Path: "STRING_VALUE",
  PolicyDocument: JSON.stringify(policyJson), // required
  Description: "policy_description",
  Tags: [ // tagListType
    { // Tag
      Key: "name", // required
      Value: "test_policy", // required
    },
  ],
};
const command = new CreatePolicyCommand(input);



(async () => {
  try {
    const response = await iam.send(command);
    console.log("Policy created successfully:", response.Policy);
  } catch (error) {
    console.error("Error creating policy:", error);
  }
})();