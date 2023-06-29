---
title: VibeCheck
publishDate: 2023-05-23 00:00:00
img: /assets/vibecheck.png
img_alt: VibeCheck Logo
description: |
  Vibe Check is a new way to discover and explore locations, offering unique and immersive experiences for users. Unlike other location-based apps, Vibe Check is all about community and connection. Our app offers a photo-centric, community-driven approach, so you can see exactly what each place has to offer, straight from the people who've been there.
tags:
  - React Native
  - Firebase
  - Expo
  - Machine Learning
link: https://expo.dev/@vibecheck-oose/vibecheckoose?serviceType=classic&distribution=expo-go&release-channel=main
---
# VibeCheck

Vibe Check is a new way to discover and explore locations, offering unique and immersive experiences for users. Unlike other location-based apps, Vibe Check is all about community and connection. Our app offers a photo-centric, community-driven approach, so you can see exactly what each place has to offer, straight from the people who've been there.

## Installing / Getting started

To install all packages to run VibeCheck, run the following command:

```shell
yarn install
```

## Environment Variables

Environment Variables containing the specifications for the Firebase and Expo configuration are required in order to start the app and/or run any tests. This can be done by creating and populating a ```.env``` file with this configuration in the following manner:

```shell
# Replace XXXX's with Firebase and Expo config keys
API_KEY=XXXX
AUTH_DOMAIN=XXXX
FIREBASE_PROJECT_ID=XXXX
STORAGE_BUCKET=XXXX
MESSAGING_SENDER_ID=XXXX
APP_ID=XXXX
MEASUREMENT_ID=XXXX
DATABASE_URL=XXXX
EXPO_PROJECT_ID=XXXX
GOOGLE_PLACES_KEY=XXX
```

After creating the file, you may need to run 
```shell
source .env
```

After installing run this to start the app

```shell
yarn expo start
```


NOTE: If you're not using the same network on your phone as your computer you should run this instead.
```shell
yarn expo start --tunnel
```
You may need to download ngrok which you can find instructions to download this [here](https://ngrok.com/download)

Next you should download the Expo Go app from the App Store or Google Play Store
Last, scan the QR code to display the app on your phone.


## Developing

To set up local development, first clone the repo and run :

```shell
yarn install
```

While that is running, create a Expo account and Firebase account and ask the team member to add you onto the projects.

To start the project locally:
```shell
yarn expo start
```

NOTE: If you're not using the same network on your phone as your computer you should run this instead.
```shell
yarn expo start --tunnel
```
You may need to download ngrok which you can find instructions to download this [here](https://ngrok.com/download)

We organized our branching into features and pages. For example, developers working on implementing user functions worked on the feature/userFunctions branch. For our database, we are using Firebase (^9.17.1). 
For code style, our team is utilizing ESLint, Prettier, and Husky. You can check code style by running the following command:
```shell
yarn lint
```

You can run the tests by running the following command:

```shell
yarn test
```

## Gallery/Screenshots:
<p align="center">
<img src="https://user-images.githubusercontent.com/53098781/233870038-28cb5d12-fd32-465c-8e66-842eede95276.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870039-2fb3ec84-b2a8-457a-97e9-e033f5ea196d.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870040-12ca14bf-1887-4a2f-adf1-8139e2206eff.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870041-db3420fe-17f0-4c75-9e78-b27f2e83195c.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870042-b8da596e-533d-4e32-bb58-8136c30fe7bc.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870043-871bea9c-1f2f-47ab-b6e7-2a5cc481ab15.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870045-cd91f7e3-bc05-4261-b14c-a249356f097d.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870047-16b5d6ea-dd83-49af-a994-cd679a38209d.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870048-4c87e9fa-ac22-43c5-8d96-2085c8861733.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870049-2edbe337-6115-47f2-a3da-e3543f030882.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870050-e9912449-832f-43b5-bfc6-b32c4ef03397.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870051-1790785e-3019-4735-a7ec-e244b62b4cbd.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870052-3752065f-fe2f-4b59-bbbb-0c4588f344ff.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870053-b75f856a-b70e-43c1-a8d0-639903c15b1a.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870055-d42e0488-3b44-4a5a-9906-f2f551c2f48a.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870057-313d3489-4945-438c-a67f-964dacd68aec.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870058-36ace980-1ce4-4952-a0a1-777ef27ebcb7.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870059-b7ec84f4-8fab-477a-8b6c-a0b3457f1458.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870060-f48fc2b0-c4c0-454e-9b3b-a74360105441.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870061-1326a9ad-ce86-4dcc-8411-fc89eb1242cd.PNG" width="30%" height="30%">
<img src="https://user-images.githubusercontent.com/53098781/233870062-59f43b07-deb5-4a5f-a2f3-21158c006068.PNG" width="30%" height="30%">



</p>
