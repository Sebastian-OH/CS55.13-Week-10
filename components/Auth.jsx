import React from "react";
import { Box, Button, Link, Text, useColorMode } from "@chakra-ui/react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, FaMoon, FaSun } from "react-icons/fa";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";
import styles from '../styles/global.module.css'

const Auth = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    const { isLoggedIn, user } = useAuth();
    const handleAuth = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };
    return (
            <Box width={{ base: 120, md: 160, lg: 200 }} textAlign="right" className={styles.navBox} marginLeft="auto" >
                
                <Button  size={{ base: "xs", md: "sm", lg: "md" }} onClick={() => toggleColorMode()}>
                    {colorMode == "dark" ? <FaSun /> : <FaMoon />}
                </Button>
                {""}
                {isLoggedIn && (
                    <>
                        <Button size={{ base: "xs", md: "sm", lg: "md"}} leftIcon={<FaGoogle />} onClick={() => auth.signOut()}
                        marginLeft={2}             
                        as={"a"}
                        display={{ base: "inline-flex", md: "inline-flex" }}
                        padding={{ base: ".5rem", md: "1rem" }}
                        fontSize={{ base: "xs", md: "sm" }}
                        fontWeight={600}
                        color={"white"}
                        bg={"blue.400"}
                        href={"#"}
                        _hover={{
                            bg: "blue.500"



                        }}>
                           Log Out
                        </Button>
                    </>
                )}
                {!isLoggedIn && (
                    <Button size={{ base: "xs", md: "sm", lg: "md" }} className={styles.busss} leftIcon={<FaGoogle />} onClick={() => handleAuth()}
                    marginLeft={2}             
                    as={"a"}
                    display={{ base: "inline-flex", md: "inline-flex" }}
                    padding={{ base: ".5rem", md: "1rem" }}
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight={600}
                    color={"white"}
                    bg={"blue.400"}
                    href={"#"}
                    _hover={{
                      bg: "blue.500"
                    }}>
                        Log in
                    </Button>
                )}
            </Box>
    );
};
export default Auth;



<Button
as={"a"}
fontSize={"sm"}
fontWeight={400}
variant={"link"}
href={"#"}
>
Sign In
</Button>