# 🎫 Ticketing App

A full-stack **Next.js ticketing application** built with **React**, **MongoDB Atlas**, and **Tailwind CSS**.  
This project demonstrates a complete CRUD workflow, modern App Router patterns, and server/client component interaction.

🔗 **Live Demo:** https://ticketing-app-ldk9.vercel.app/

---

## ✨ Features

- ✅ Create, read, update, and delete tickets
- 💬 Add and delete comments on individual tickets
- 🗂️ Tickets grouped by category
- 📊 Priority, status, and progress tracking
- 🧠 Server Components + Client Components (Next.js App Router)
- 🌐 MongoDB Atlas for persistent data storage
- 🎨 Responsive UI styled with Tailwind CSS
- 🚀 Deployed on Vercel

---

## 🛠️ Tech Stack

- **Frontend**
  - Next.js (App Router)
  - React
  - Tailwind CSS

- **Backend**
  - Next.js API Routes
  - MongoDB Atlas
  - Mongoose ODM

- **Deployment**
  - Vercel

---

## 📸 Screenshots

<img width="1738" height="723" alt="Screenshot 2025-12-29 at 4 49 22 PM" src="https://github.com/user-attachments/assets/63a6fa61-e719-4c00-8bc9-8535a7b8f5c9" />
<img width="1906" height="916" alt="Screenshot 2025-12-29 at 4 50 19 PM" src="https://github.com/user-attachments/assets/fd6e4174-3ff3-4050-8c76-9a54c3ceb66b" />


---

## 🧩 Data Models

### Ticket
- Title
- Description
- Category
- Priority
- Status
- Progress
- Created At
- Comments (embedded)

### Comment
- Text
- Created At

---

## 🚦 CRUD Functionality

### Tickets
- Create new tickets
- Edit existing tickets
- Delete tickets
- View tickets by category

### Comments
- Add comments to tickets
- Delete individual comments

---

## 🧪 API Routes

| Method | Route | Description |
|------|------|-------------|
| GET | `/api/Tickets` | Fetch all tickets |
| POST | `/api/Tickets` | Create a new ticket |
| GET | `/api/Tickets/:id` | Fetch a single ticket |
| PUT | `/api/Tickets/:id` | Update a ticket |
| DELETE | `/api/Tickets/:id` | Delete a ticket |
| POST | `/api/Tickets/:id/comments` | Add a comment |
| DELETE | `/api/Tickets/:id/comments/:commentId` | Delete a comment |

---

## ⚙️ Environment Variables

Create a `.env.local` file and add:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
NEXT_PUBLIC_API_URL=http://localhost:3000
