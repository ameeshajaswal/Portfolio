export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 flex justify-center items-center">
      <p className="text-center text-sm md:text-base">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
    </footer>
  );
}
