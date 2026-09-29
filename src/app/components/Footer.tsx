const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="container mx-auto px-4 py-10 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black tracking-wider">
              FIT<span className="text-[#ccff00]">LOG</span>
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Train with intent. Log every set.
            </p>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 md:text-right">
            © 2026 FitLog — Workout Library.
            <br className="md:hidden" /> Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;