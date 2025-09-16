# React Native Registration Form App
A simple Registration Form App built with React Native CLI to practice core components, styling, validation, and keyboard handling.

# 🎯 Features
- Core React Native components (View, Text, Image, ScrollView)
- User input fields (TextInput) for Full Name, Email, Password
- Validation rules:
  	- Name cannot be empty
  	- Email must contain @
  	- Password must be at least 6 characters
- Error messages displayed under inputs
- Submit button → validates and shows success message
- Clear button → resets all fields
- Keyboard handling with KeyboardAvoidingView & tap-to-dismiss
- Clean & professional UI with StyleSheet + Flexbox

# ⚙️ Installation & Setup
1. Clone the repository
   ```bash
   git clone https://github.com/snArifTaim/Registration-form-react-native-/
   cd RegistrationApp
3. Install dependencies
	```bash
 	npm install
5. Run the app
	- On Android:
		```bash
  		npx react-native run-android
	- On iOS (Mac only):
 	  ⚠️ I don’t have a Mac, so I could not test iOS build. But the app can be run on iOS using the following command (on a Mac with Xcode installed):
		```bash
 		npx react-native run-ios

# 🛠️ Tech Stack
- React Native CLI
- JavaScript (ES6)
- Android Studio / Xcode (for emulators)


# 📌 Expected User Flow
1. App loads → shows logo and registration form.
2. User enters details:
   - If invalid → error messages appear under fields.
   - If valid → success alert shows.
3. Clear button resets all inputs.
4. Keyboard never hides input fields.

# 👨‍💻 Author
- Md Arif Islam
- Assignment for React Native Basics


