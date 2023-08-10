import { IAMClient, ListRolesCommand, CreatePolicyCommand, DeletePolicyCommand } from "@aws-sdk/client-iam";

const iam = new IAMClient({
  region: "us-west-1",
  credentials: {
    accessKeyId: `your_aws_creds`,
    secretAccessKey: `your_aws_creds`,
    sessionToken: `your_aws_creds`
  },
});

const input = { // DeletePolicyRequest
  PolicyArn: "your_policy_arn", // required
};
const command = new DeletePolicyCommand(input);


(async () => {
  try {
    const response = await iam.send(command);
    console.log("Policy deleted successfully:");
  } catch (error) {
    console.error("Error deleting policy:", error);
  }
})();