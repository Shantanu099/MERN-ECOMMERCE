router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);