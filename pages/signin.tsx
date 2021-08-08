import { Container } from "@chakra-ui/react";
import  StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "../firebase/clientApp"

//Configure Firebase UI
const uiConfig = {
  //Redirect to / after sign in is sucessful.
  signInSuccessUrl: "/",
  // Display auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};


export default function signin() {
    return ( 
        <Container justifyContent="center">
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </Container>
    )
}

