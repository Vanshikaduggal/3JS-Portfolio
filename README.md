# Creative Portfolio

A modern, responsive portfolio website built with Next.js, React, and Three.js. This portfolio showcases your work with beautiful 3D elements and smooth animations.

## 🚀 Features

- Modern and responsive design
- 3D elements using Three.js and React Three Fiber
- Smooth animations with Framer Motion
- Contact form with EmailJS integration
- Tailwind CSS for styling
- Type-safe with TypeScript
- SEO optimized

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **3D Graphics:** Three.js, React Three Fiber
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form
- **Email Service:** EmailJS
- **Icons:** Lucide React
- **Notifications:** Sonner

## 📦 Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your EmailJS credentials:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── app/           # Next.js app directory
├── components/    # Reusable React components
public/            # Static assets
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `next.config.mjs` - Next.js configuration
- `jsconfig.json` - JavaScript configuration

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 