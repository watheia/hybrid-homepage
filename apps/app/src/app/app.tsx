import React, { useEffect, useState } from "react"

import { Message } from "@hybrid-homepage/api-interfaces"
import { HybridHomepage, SupportPage } from "@hybrid-homepage/content"
import classes from "./app.module.scss"
import { Box, Container, Typography, Link } from "@material-ui/core"

const baseUrl = "https://watheia.app"

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href={`${baseUrl}/`}>
        Watheia Labs, LLC.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      mt: "auto",
      backgroundColor: (theme) => (theme.palette.mode === "light" ? "#eef2f9" : "#273c5e")
    }}
  >
    <Container maxWidth="sm">
      <Copyright />
    </Container>
  </Box>
)

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: "" })

  useEffect(() => {
    fetch(`${baseUrl}/api/greeting`)
      .then((r) => r.json())
      .then(setMessage)
  }, [])

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <HybridHomepage />
      <Footer />
    </Box>
  )
}

export default App
