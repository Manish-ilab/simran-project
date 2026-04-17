export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center p-8 text-[12px] text-text-light border-t border-border bg-cream">
      <p>Designed with care · Simran Shrestha © {currentYear}</p>
    </footer>
  );
}
