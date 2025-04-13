import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  tags: string[];
  media?: {
    images?: { url: string; caption: string }[];
    videos?: { url: string; caption: string }[];
    codeBlocks?: { code: string; language: string; caption: string }[];
    tables?: { data: string[][]; caption: string }[];
  };
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const tempBlogPosts: Record<string, BlogPost> = {
  "project1": {
    id: "project1",
    title: "Building a Real-time Chat Application",
    description: "A deep dive into creating a modern chat application using React and WebSocket",
    content: `## Introduction
In this project, I built a real-time chat application using React for the frontend and WebSocket for real-time communication. The application features instant messaging, user presence, and message history.

Here's how the application looks:

[image:chat-interface]

## Technical Stack
- React.js for the frontend interface
- WebSocket for real-time communication
- Node.js for the backend server
- MongoDB for message storage and user data

Here's a quick demo of the real-time messaging:

[video:chat-demo]

## Architecture Overview

Let's look at our technology stack and their respective roles:

[table:tech-stack]

## Key Features
1. Real-time messaging with instant updates
2. User presence indicators (online/offline status)
3. Message history with infinite scroll
4. File sharing capabilities
5. Emoji support and reactions
6. Read receipts
7. Typing indicators

## Implementation Details

Here's how we handle WebSocket connections:

[code:websocket-handler]

The application architecture is built around three main components...`,
    date: "2024-06-20",
    tags: ["React", "WebSocket", "Node.js", "MongoDB"],
    media: {
      images: [{
        url: "https://example.com/chat-interface.png",
        caption: "Chat application interface showing real-time messaging"
      }],
      videos: [{
        url: "https://example.com/chat-demo.mp4",
        caption: "Demo of real-time messaging between two users"
      }],
      codeBlocks: [{
        code: `const wsHandler = new WebSocket(WS_URL);

wsHandler.onmessage = (event) => {
  const message = JSON.parse(event.data);
  switch (message.type) {
    case 'NEW_MESSAGE':
      handleNewMessage(message);
      break;
    case 'USER_PRESENCE':
      updateUserStatus(message);
      break;
    default:
      console.log('Unknown message type:', message.type);
  }
};`,
        language: "typescript",
        caption: "WebSocket message handler implementation"
      }],
      tables: [{
        data: [
          ["Technology", "Role", "Key Features"],
          ["React.js", "Frontend Framework", "Component-based UI, State Management, Virtual DOM"],
          ["WebSocket", "Real-time Communication", "Bi-directional data flow, Low latency, Event-driven"],
          ["Node.js", "Backend Server", "Event Loop, Non-blocking I/O, Express.js"],
          ["MongoDB", "Database", "Document Store, Scalability, Real-time Updates"]
        ],
        caption: "Technology Stack Overview"
      }]
    }
  },
"project2": {
    id: "project2",
    title: "Building a Real-time Chat Application",
    description: "A deep dive into creating a modern chat application using React and WebSocket",
    content: `## Introduction
In this project, I built a real-time chat application using React for the frontend and WebSocket for real-time communication. The application features instant messaging, user presence, and message history.

Here's how the application looks:

[image:chat-interface]

## Technical Stack
- React.js for the frontend interface
- WebSocket for real-time communication
- Node.js for the backend server
- MongoDB for message storage and user data

Here's a quick demo of the real-time messaging:

[video:chat-demo]

## Architecture Overview

Let's look at our technology stack and their respective roles:

[table:tech-stack]

## Key Features
1. Real-time messaging with instant updates
2. User presence indicators (online/offline status)
3. Message history with infinite scroll
4. File sharing capabilities
5. Emoji support and reactions
6. Read receipts
7. Typing indicators

## Implementation Details

Here's how we handle WebSocket connections:

[code:websocket-handler]

The application architecture is built around three main components...`,
    date: "2024-06-20",
    tags: ["React", "WebSocket", "Node.js", "MongoDB"],
    media: {
      images: [{
        url: "https://example.com/chat-interface.png",
        caption: "Chat application interface showing real-time messaging"
      }],
      videos: [{
        url: "https://example.com/chat-demo.mp4",
        caption: "Demo of real-time messaging between two users"
      }],
      codeBlocks: [{
        code: `const wsHandler = new WebSocket(WS_URL);

wsHandler.onmessage = (event) => {
  const message = JSON.parse(event.data);
  switch (message.type) {
    case 'NEW_MESSAGE':
      handleNewMessage(message);
      break;
    case 'USER_PRESENCE':
      updateUserStatus(message);
      break;
    default:
      console.log('Unknown message type:', message.type);
  }
};`,
        language: "typescript",
        caption: "WebSocket message handler implementation"
      }],
      tables: [{
        data: [
          ["Technology", "Role", "Key Features"],
          ["React.js", "Frontend Framework", "Component-based UI, State Management, Virtual DOM"],
          ["WebSocket", "Real-time Communication", "Bi-directional data flow, Low latency, Event-driven"],
          ["Node.js", "Backend Server", "Event Loop, Non-blocking I/O, Express.js"],
          ["MongoDB", "Database", "Document Store, Scalability, Real-time Updates"]
        ],
        caption: "Technology Stack Overview"
      }]
    }
  },
  "project3": {
    id: "project3",
    title: "Building a Real-time Chat Application",
    description: "A deep dive into creating a modern chat application using React and WebSocket",
    content: `## Introduction
In this project, I built a real-time chat application using React for the frontend and WebSocket for real-time communication. The application features instant messaging, user presence, and message history.

Here's how the application looks:

[image:chat-interface]

## Technical Stack
- React.js for the frontend interface
- WebSocket for real-time communication
- Node.js for the backend server
- MongoDB for message storage and user data

Here's a quick demo of the real-time messaging:

[video:chat-demo]

## Architecture Overview

Let's look at our technology stack and their respective roles:

[table:tech-stack]

## Key Features
1. Real-time messaging with instant updates
2. User presence indicators (online/offline status)
3. Message history with infinite scroll
4. File sharing capabilities
5. Emoji support and reactions
6. Read receipts
7. Typing indicators

## Implementation Details

Here's how we handle WebSocket connections:

[code:websocket-handler]

The application architecture is built around three main components...`,
    date: "2024-06-20",
    tags: ["React", "WebSocket", "Node.js", "MongoDB"],
    media: {
      images: [{
        url: "https://example.com/chat-interface.png",
        caption: "Chat application interface showing real-time messaging"
      }],
      videos: [{
        url: "https://example.com/chat-demo.mp4",
        caption: "Demo of real-time messaging between two users"
      }],
      codeBlocks: [{
        code: `const wsHandler = new WebSocket(WS_URL);

wsHandler.onmessage = (event) => {
  const message = JSON.parse(event.data);
  switch (message.type) {
    case 'NEW_MESSAGE':
      handleNewMessage(message);
      break;
    case 'USER_PRESENCE':
      updateUserStatus(message);
      break;
    default:
      console.log('Unknown message type:', message.type);
  }
};`,
        language: "typescript",
        caption: "WebSocket message handler implementation"
      }],
      tables: [{
        data: [
          ["Technology", "Role", "Key Features"],
          ["React.js", "Frontend Framework", "Component-based UI, State Management, Virtual DOM"],
          ["WebSocket", "Real-time Communication", "Bi-directional data flow, Low latency, Event-driven"],
          ["Node.js", "Backend Server", "Event Loop, Non-blocking I/O, Express.js"],
          ["MongoDB", "Database", "Document Store, Scalability, Real-time Updates"]
        ],
        caption: "Technology Stack Overview"
      }]
    }
  },
  "project4": {
    id: "project4",
    title: "Car Accident Detector & Recorder",
    description: "A Car Accident Detector & Alert System using BlackBox Technology",
    content: `##  Introduction
Car accidents are a major cause of fatalities worldwide. The **Car Accident Detector & Recorder** is an **IoT-based smart system** designed to detect car accidents, record crucial data, and send instant alerts to emergency contacts. This system helps in **saving lives** by providing **real-time location tracking**, accident data storage, and **immediate alerts** for critical incidents such as fire, vibration, and alcohol detection.

## Project Overview
This system utilizes multiple sensors, a microcontroller (ESP8266 NodeMCU), and GSM/GPS communication to detect accidents and alert emergency contacts. The collected data is also stored for future analysis.

##  Features
  -  **Real-time Accident Detection** using vibration, gyroscope, and temperature sensors.
  -  **GPS & GSM Integration** for sending instant location alerts via SMS.
  -  **IoT-based Remote Monitoring** using **Blynk** for live status tracking.
  -  **Fire & Alcohol Detection** to identify hazardous situations.
  -  **Accident Data Storage** for investigation and analytics.
  -  **Live Data Monitoring** via mobile app.

##  System Architecture
### Components Used:
### Microcontroller: 
- NodeMCU ESP8266
### Sensors:
- Temperature Sensor (Fire Detection)
- Vibration Sensor (Impact Detection)
- Alcohol Sensor (Drunk Driving Detection)
- Gyroscope Sensor (Vehicle Tilt Detection)
### Communication Modules:
- GPS Module (Location Tracking)
- GSM Module (SMS Alerts)
### Storage: 
- SD Card Module
### Software & Cloud Services:
- Blynk IoT Platform
- Arduino IDE for Programming



##  How It Works
 1. **Accident Detection**: When an impact is detected, data is recorded.
 2. **Data Logging**: Sensor readings are stored on the SD card.
 3. **Emergency Alert**: SMS with **GPS Location** is sent via the GSM module.
 4. **Remote Monitoring**: Live data is accessible through the **Blynk IoT App**.`,
    date: "2024-06-20",
    tags: ["React", "WebSocket", "Node.js", "MongoDB"],
    media: {
      images: [{
        url: "https://example.com/chat-interface.png",
        caption: "Chat application interface showing real-time messaging"
      }],
      videos: [{
        url: "https://example.com/chat-demo.mp4",
        caption: "Demo of real-time messaging between two users"
      }],
      codeBlocks: [{
        code: `const wsHandler = new WebSocket(WS_URL);

wsHandler.onmessage = (event) => {
  const message = JSON.parse(event.data);
  switch (message.type) {
    case 'NEW_MESSAGE':
      handleNewMessage(message);
      break;
    case 'USER_PRESENCE':
      updateUserStatus(message);
      break;
    default:
      console.log('Unknown message type:', message.type);
  }
};`,
        language: "typescript",
        caption: "WebSocket message handler implementation"
      }],
      tables: [{
        data: [
          ["Technology", "Role", "Key Features"],
          ["React.js", "Frontend Framework", "Component-based UI, State Management, Virtual DOM"],
          ["WebSocket", "Real-time Communication", "Bi-directional data flow, Low latency, Event-driven"],
          ["Node.js", "Backend Server", "Event Loop, Non-blocking I/O, Express.js"],
          ["MongoDB", "Database", "Document Store, Scalability, Real-time Updates"]
        ],
        caption: "Technology Stack Overview"
      }]
    }
  },
  "project5": {
    id: "project5",
    title: "Building a Real-time Chat Application",
    description: "A deep dive into creating a modern chat application using React and WebSocket",
    content: `## Introduction
In this project, I built a real-time chat application using React for the frontend and WebSocket for real-time communication. The application features instant messaging, user presence, and message history.

Here's how the application looks:

[image:chat-interface]

## Technical Stack
- React.js for the frontend interface
- WebSocket for real-time communication
- Node.js for the backend server
- MongoDB for message storage and user data

Here's a quick demo of the real-time messaging:

[video:chat-demo]

## Architecture Overview

Let's look at our technology stack and their respective roles:

[table:tech-stack]

## Key Features
1. Real-time messaging with instant updates
2. User presence indicators (online/offline status)
3. Message history with infinite scroll
4. File sharing capabilities
5. Emoji support and reactions
6. Read receipts
7. Typing indicators

## Implementation Details

Here's how we handle WebSocket connections:

[code:websocket-handler]

The application architecture is built around three main components...`,
    date: "2024-06-20",
    tags: ["React", "WebSocket", "Node.js", "MongoDB"],
    media: {
      images: [{
        url: "https://example.com/chat-interface.png",
        caption: "Chat application interface showing real-time messaging"
      }],
      videos: [{
        url: "https://example.com/chat-demo.mp4",
        caption: "Demo of real-time messaging between two users"
      }],
      codeBlocks: [{
        code: `const wsHandler = new WebSocket(WS_URL);

wsHandler.onmessage = (event) => {
  const message = JSON.parse(event.data);
  switch (message.type) {
    case 'NEW_MESSAGE':
      handleNewMessage(message);
      break;
    case 'USER_PRESENCE':
      updateUserStatus(message);
      break;
    default:
      console.log('Unknown message type:', message.type);
  }
};`,
        language: "typescript",
        caption: "WebSocket message handler implementation"
      }],
      tables: [{
        data: [
          ["Technology", "Role", "Key Features"],
          ["React.js", "Frontend Framework", "Component-based UI, State Management, Virtual DOM"],
          ["WebSocket", "Real-time Communication", "Bi-directional data flow, Low latency, Event-driven"],
          ["Node.js", "Backend Server", "Event Loop, Non-blocking I/O, Express.js"],
          ["MongoDB", "Database", "Document Store, Scalability, Real-time Updates"]
        ],
        caption: "Technology Stack Overview"
      }]
    }
  },
  "project6": {
    id: "project6",
    title: "Building a Real-time Chat Application",
    description: "A deep dive into creating a modern chat application using React and WebSocket",
    content: `## Introduction
In this project, I built a real-time chat application using React for the frontend and WebSocket for real-time communication. The application features instant messaging, user presence, and message history.

Here's how the application looks:

[image:chat-interface]

## Technical Stack
- React.js for the frontend interface
- WebSocket for real-time communication
- Node.js for the backend server
- MongoDB for message storage and user data

Here's a quick demo of the real-time messaging:

[video:chat-demo]

## Architecture Overview

Let's look at our technology stack and their respective roles:

[table:tech-stack]

## Key Features
1. Real-time messaging with instant updates
2. User presence indicators (online/offline status)
3. Message history with infinite scroll
4. File sharing capabilities
5. Emoji support and reactions
6. Read receipts
7. Typing indicators

## Implementation Details

Here's how we handle WebSocket connections:

[code:websocket-handler]

The application architecture is built around three main components...`,
    date: "2024-06-20",
    tags: ["React", "WebSocket", "Node.js", "MongoDB"],
    media: {
      images: [{
        url: "https://example.com/chat-interface.png",
        caption: "Chat application interface showing real-time messaging"
      }],
      videos: [{
        url: "https://example.com/chat-demo.mp4",
        caption: "Demo of real-time messaging between two users"
      }],
      codeBlocks: [{
        code: `const wsHandler = new WebSocket(WS_URL);

wsHandler.onmessage = (event) => {
  const message = JSON.parse(event.data);
  switch (message.type) {
    case 'NEW_MESSAGE':
      handleNewMessage(message);
      break;
    case 'USER_PRESENCE':
      updateUserStatus(message);
      break;
    default:
      console.log('Unknown message type:', message.type);
  }
};`,
        language: "typescript",
        caption: "WebSocket message handler implementation"
      }],
      tables: [{
        data: [
          ["Technology", "Role", "Key Features"],
          ["React.js", "Frontend Framework", "Component-based UI, State Management, Virtual DOM"],
          ["WebSocket", "Real-time Communication", "Bi-directional data flow, Low latency, Event-driven"],
          ["Node.js", "Backend Server", "Event Loop, Non-blocking I/O, Express.js"],
          ["MongoDB", "Database", "Document Store, Scalability, Real-time Updates"]
        ],
        caption: "Technology Stack Overview"
      }]
    }
  },
  "project7": {
    id: "project7",
    title: "Building a Real-time Chat Application",
    description: "A deep dive into creating a modern chat application using React and WebSocket",
    content: `## Introduction
In this project, I built a real-time chat application using React for the frontend and WebSocket for real-time communication. The application features instant messaging, user presence, and message history.

Here's how the application looks:

[image:chat-interface]

## Technical Stack
- React.js for the frontend interface
- WebSocket for real-time communication
- Node.js for the backend server
- MongoDB for message storage and user data

Here's a quick demo of the real-time messaging:

[video:chat-demo]

## Architecture Overview

Let's look at our technology stack and their respective roles:

[table:tech-stack]

## Key Features
1. Real-time messaging with instant updates
2. User presence indicators (online/offline status)
3. Message history with infinite scroll
4. File sharing capabilities
5. Emoji support and reactions
6. Read receipts
7. Typing indicators

## Implementation Details

Here's how we handle WebSocket connections:

[code:websocket-handler]

The application architecture is built around three main components...`,
    date: "2024-06-20",
    tags: ["React", "WebSocket", "Node.js", "MongoDB"],
    media: {
      images: [{
        url: "https://example.com/chat-interface.png",
        caption: "Chat application interface showing real-time messaging"
      }],
      videos: [{
        url: "https://example.com/chat-demo.mp4",
        caption: "Demo of real-time messaging between two users"
      }],
      codeBlocks: [{
        code: `const wsHandler = new WebSocket(WS_URL);

wsHandler.onmessage = (event) => {
  const message = JSON.parse(event.data);
  switch (message.type) {
    case 'NEW_MESSAGE':
      handleNewMessage(message);
      break;
    case 'USER_PRESENCE':
      updateUserStatus(message);
      break;
    default:
      console.log('Unknown message type:', message.type);
  }
};`,
        language: "typescript",
        caption: "WebSocket message handler implementation"
      }],
      tables: [{
        data: [
          ["Technology", "Role", "Key Features"],
          ["React.js", "Frontend Framework", "Component-based UI, State Management, Virtual DOM"],
          ["WebSocket", "Real-time Communication", "Bi-directional data flow, Low latency, Event-driven"],
          ["Node.js", "Backend Server", "Event Loop, Non-blocking I/O, Express.js"],
          ["MongoDB", "Database", "Document Store, Scalability, Real-time Updates"]
        ],
        caption: "Technology Stack Overview"
      }]
    }
  }
};

const ProjectBlog: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const post = projectId ? tempBlogPosts[projectId] : null;

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="blog-error">Blog post not found</div>
        <Footer />
      </>
    );
  }

  const renderMedia = (content: string) => {
    if (!post.media) return content;

    return content.split('\n').map((line, index) => {
      // Handle images
      if (line.startsWith('[image:')) {
        const imageId = line.match(/\[image:(.*?)\]/)?.[1] || '';
        const image = post.media?.images?.find(img => img.url.toLowerCase().includes(imageId.toLowerCase()));
        if (image) {
          return (
            <div key={index} className="blog-media-container">
              <img src={image.url} alt={image.caption} className="blog-image" />
              <p className="blog-media-caption">{image.caption}</p>
            </div>
          );
        }
      }

      // Handle videos
      if (line.startsWith('[video:')) {
        const videoId = line.match(/\[video:(.*?)\]/)?.[1] || '';
        const video = post.media?.videos?.find(v => v.url.toLowerCase().includes(videoId.toLowerCase()));
        if (video) {
          return (
            <div key={index} className="blog-media-container">
              <video controls className="blog-video">
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="blog-media-caption">{video.caption}</p>
            </div>
          );
        }
      }

      // Handle code blocks
      if (line.startsWith('[code:')) {
        const codeId = line.match(/\[code:(.*?)\]/)?.[1] || '';
        const codeBlock = post.media?.codeBlocks?.find(cb => 
          cb.caption.toLowerCase().includes(codeId.toLowerCase()) || 
          codeId.toLowerCase() === 'websocket-handler'
        );
        if (codeBlock) {
          return (
            <div key={index} className="blog-media-container">
              <div className="blog-code-language">{codeBlock.language}</div>
              <pre className="blog-code">
                <code className={`language-${codeBlock.language}`}>
                  {codeBlock.code.trim()}
                </code>
              </pre>
            </div>
          );
        }
      }

      // Handle tables
      if (line.startsWith('[table:')) {
        const tableId = line.match(/\[table:(.*?)\]/)?.[1] || '';
        const table = post.media?.tables?.find(t => 
          t.caption.toLowerCase().includes(tableId.toLowerCase()) || 
          tableId.toLowerCase() === 'tech-stack'
        );
        if (table) {
          return (
            <div key={index} className="blog-media-container">
              <table className="blog-table">
                <thead>
                  <tr>
                    {table.data[0].map((header, cellIndex) => (
                      <th key={cellIndex}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.data.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
      }

      // Handle headings
      if (line.startsWith('#')) {
        const level = line.match(/^#+/)?.[0].length || 1;
        const text = line.replace(/^#+\s/, '');
        const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
        return <HeadingTag key={index} className={`blog-heading-${level}`}>{text}</HeadingTag>;
      }

      // Handle lists
      if (line.startsWith('-')) {
        return <li key={index} style={{ marginLeft: '20px' }}>{line.substring(2)}</li>;
      }
      if (line.match(/^\d+\./)) {
        return <li key={index} style={{ marginLeft: '20px' }}>{line.replace(/^\d+\.\s/, '')}</li>;
      }

      // Handle bold text
      const boldText = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return boldText.trim() ? <p key={index} dangerouslySetInnerHTML={{ __html: boldText }} /> : null;
    });
  };

  return (
    <>
      <Navbar />
      <div className="blog-container">
        <button onClick={() => navigate(-1)} className="blog-back-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
        
        <div className="blog-header">
          <span className="blog-date">{formatDate(post.date)}</span>
          <h1 className="blog-title">{post.title}</h1>
          <div className="blog-metadata">
            <div className="blog-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="blog-tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="blog-description">
            {post.description}
          </div>
        </div>

        <div className="blog-content">
          {renderMedia(post.content)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectBlog; 