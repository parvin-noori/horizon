# 🌌 Horizon Dashboard

**Horizon** is a modern, customizable **React dashboard template** built with a feature-based architecture, focusing on scalability, performance, and rich user experience.

## 🔗 Live Demo

👉 **Vercel Preview:**  
[demo](https://horizon-hazel-delta.vercel.app/)

---

## 🔐 Authentication (Supabase)

This dashboard uses **Supabase Auth** to simulate a real-world authentication flow.

- Authentication is required to access the dashboard
- Login is handled via **Email & Password**
- Supabase returns a **JWT access token**
- The token is stored in **LocalStorage** (demo purpose)
- Protected routes prevent unauthorized access

> ⚠️ Note: Due to Supabase access restrictions, a VPN may be required to use the authentication features in some regions

> ⚠️ This authentication flow is implemented **for demo purposes only**.

### 🧪 Demo Credentials
- **Email:** adeleParkson@user.com  
- **Password:** abc@123

---


## 🖼 login

At first you face the login page, because the nature of dashboard panels, which is authenticated:

![Horizon Dashboard Preview](https://github.com/parvin-noori/horizon/blob/main/public/imgs/signIn.png)

> We've used **supabase** login api to get an access token for working like a real authorization scenarios .  
> **(Note that you should always login with this username and password to access to dashboard )**.

## 🖼 Dashboard
well, when you successfully logged in, you'll face the dashboard layout which we really love it:

![Horizon Dashboard Preview](https://github.com/parvin-noori/horizon/blob/main/public/imgs/dashboard.png)
![Horizon Dashboard Preview](https://github.com/parvin-noori/horizon/blob/main/public/imgs/kanban.png)

---

## ✨ Features

- ⚛️ Built with **React**
- 🧩 **Feature-Based Architecture**
- 🧠 **Redux Toolkit** for global state management
- 🔄 **React Query** for server-state management
- 🧲 **Drag & Drop** powered by **@dnd-kit**
- 💾 **Persistent dashboard layout** using LocalStorage
- 🌗 **Dark / Light theme support**
- 🎨 Styled with **Tailwind CSS**
- 📊 Interactive charts with **Recharts**
- 🧭 Sliders & carousels using **Swiper**
- 📝 Forms handled by **React Hook Form**
- 📦 Dynamic data loaded from local JSON files
- 📱 Fully responsive dashboard UI
- 🔐 Authentication with **Supabase**
- 🌐 Multi-language support with i18next
- 🛠️ Full TypeScript support for better type safety and developer experience

---

## 🧱 Tech Stack

- **React**
- **Redux Toolkit**
- **React Query**
- **Tailwind CSS**
- **Supabase Auth**
- **@dnd-kit**
- **Recharts**
- **Swiper**
- **React Hook Form**
- **Vite**
- i18next / react-i18next
- TypeScript

---

## 🔒 Route Protection

Dashboard routes are protected by checking authentication state before rendering.

Unauthorized users are redirected to the login page.



