# Video Call Application for Interviews and Teaching

Developed a video call application specifically designed for interviews and teaching purposes. The application features a shared code editor, allowing users to collaboratively write and review code in real-time. This functionality enhances the quality of explanations and facilitates better understanding during technical discussions and coding sessions.

## Features

- **Video Calling:** High-quality video and audio calls.
- **Shared Code Editor:** Real-time collaborative code editor.
- **User Authentication:** Secure login and registration system.
- **Screen Sharing:** Share your screen with other participants.
- **Chat:** Instant messaging during the call.
- **Responsive Design:** Works seamlessly on desktops, tablets, and mobile devices.

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js, Handlebars.js
- **Database:** MongoDB
- **Real-time Communication:** WebRTC, Socket.io
- **Authentication:** JWT (JSON Web Tokens)
- **Code Editor:** Ace Editor

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/karan-gaur/Video_Calling.git
    cd Video_Calling
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following:


4. **Run the application:**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

1. **Register and Login:**

    Users need to register and log in to use the application.

2. **Start a Video Call:**

    - Navigate to the dashboard and click on "Start Call".
    - Share the generated call link with other participants.

3. **Use the Shared Code Editor:**

    - Once in a call, open the code editor from the call interface.
    - Collaborate in real-time with other participants.
