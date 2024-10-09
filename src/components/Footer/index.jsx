export default function Footer() {
    return (
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            
            {/* Products Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Products</h3>
              <ul>
                <li className="hover:underline">Attachments</li>
                <li className="hover:underline">Equipment</li>
                <li className="hover:underline">Parts</li>
                <li className="hover:underline">Power Systems</li>
              </ul>
            </div>
  
            {/* Services & Support Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Services & Support</h3>
              <ul>
                <li className="hover:underline">Financing & Insurance</li>
                <li className="hover:underline">Maintenance</li>
                <li className="hover:underline">Technology & Solutions</li>
              </ul>
            </div>
  
            {/* How Can We Help? Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">How Can We Help?</h3>
              <ul>
                <li className="hover:underline">Contact Us</li>
                <li className="hover:underline">Find Rental Equipment</li>
                <li className="hover:underline">Find Used Equipment</li>
                <li className="hover:underline">Find Your Dealer</li>
              </ul>
            </div>
  
            {/* Company Info Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Company Info</h3>
              <ul>
                <li className="hover:underline">Careers</li>
                <li className="hover:underline">Company</li>
                <li className="hover:underline">Corporate Press Releases</li>
                <li className="hover:underline">Investors</li>
              </ul>
            </div>
  
            {/* Industry Solutions Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Industry Solutions</h3>
              <ul>
                <li className="hover:underline">Industries</li>
              </ul>
            </div>
  
            {/* Connect With Cat Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Connect With Cat</h3>
              <ul>
                <li className="hover:underline">Caterpillar Foundation</li>
                <li className="hover:underline">Social Media</li>
                <li className="hover:underline">Visitors Center & Museum</li>
              </ul>
            </div>
  
          </div>
        </div>
      </footer>
    );
  }
  