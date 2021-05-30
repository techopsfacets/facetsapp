import {CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_EB948S2tX",
    ClientId: "1g5ap9rkj1eqgtc2niebseo8lg"
}

export default new CognitoUserPool(poolData);