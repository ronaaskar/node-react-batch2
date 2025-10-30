app.post('/register', async (req, res) => {
    const { username, password } = req.body;
// Check if the user already exists
    if (pengecekan existing user) {
return res.status(409).json({ message: 'User already exists' });
} // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
// kode save user disini //
// Add the new user to the users array (or your database
res.status(201).json({ message: 'User registered successfully' });


