# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide

## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.


## Deployment
  - Create a trial account in sap BTP cockpit
  - Use Booster to subscribe to SAP Business Application Studio
  - Create an SAP Hana Cloud Instance manually
  - Open the BAS and clone this repo
  - Build the CAP application and use the 'cf deploy mta_archive/***.mtar' command to deploy the app to the SAP trial account
  - On successful deployment, you could see three applications in the trial sub-account as in the screenshot

![image](https://github.com/Boopalan020/ToApp/assets/53337900/274d4d8b-07b6-40fa-ad30-dea876b16082)

## Permitting to access the CAP Service
  - Goto the BTP sub-account and navigate to the Security -> Role Collections
  - Create a new custom role collection and add the role templates that are created by deploying the CAP application.
  - Assign the role collection to the user to permit them to access the cap service.
    <img width="1440" alt="image" src="https://github.com/Boopalan020/ToApp/assets/53337900/68ab43d5-2a60-4935-9751-26443eaa0038">

## Creating Destination
  - Goto the BTP sub-account and navigate to the Connectivity -> Destinations
  - Create a new Destination with Auth type as 'oAuth2UserTokenExchange' with below parameters and properties
    ![image](https://github.com/Boopalan020/ToApp/assets/53337900/5ab4789f-6c7c-4f68-8b37-42c0c446c32b)
  - Note : The parameters mentioned above are subject to change based on the trial account.
      1. URL -> url of the deployed cap service
          <img width="1428" alt="image" src="https://github.com/Boopalan020/ToApp/assets/53337900/2ee2dbcf-1c51-4734-9740-51d3c267ccf3">

      3. Client ID, Client Secret, Token Service URL -> can be taken from the Environmental variable of the CAP service application
          <img width="1410" alt="image" src="https://github.com/Boopalan020/ToApp/assets/53337900/351aad06-ee92-47fc-ba21-42a028e8eac9">

