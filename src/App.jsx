import { useState, useEffect } from 'react';
import './App.css';
import './Grow/style.css';

export default function App() {
  const phrases = [
    'Market Feeds',
    'Instant Orders',
    'Stress-free Trading',
    'Supercharged APIs',
  ];

  const [currentText, setCurrentText] = useState(phrases[0]);
  const [showButtons, setShowButtons] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const apiOptions = [
    {
      title: 'Portfolio APIs',
      subtitle: 'Get Holdings · Get Positions',
      code: `// Sample Java Code Here`,
    },
    {
      title: 'Ordering APIs',
      subtitle: 'Place, Modify, Cancel Orders',
      code: `// Your ordering API code here`,
    },
    {
      title: 'Data APIs',
      subtitle: 'Get LTP · Quote · OHLC',
      code: `// Your data API code here`,
    },
    {
      title: 'Statement APIs',
      subtitle: 'Order Statement',
      code: `// Your statement API code here`,
    },
    {
      title: 'Historical Data APIs',
      subtitle: 'Historical Candle Data',
      code: `// Your historical API code here`,
    },
  ];

  const faqs = [
    {
      question: 'What are API usage limits?',
      answer:
        'Each plan has its own rate limits. Please refer to the pricing section for details.',
    },
    {
      question: 'Can I use these APIs for commercial purposes?',
      answer:
        'Yes, our APIs are designed for both personal and commercial usage.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we provide a 7-day free trial for all new users.',
    },
    {
      question: 'Do I need to renew manually every month?',
      answer: 'No, the subscription renews automatically unless canceled.',
    },
    {
      question: 'Is customer support available?',
      answer: 'Yes, you can reach our support team 24/7 via chat or email.',
    },
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      if (index < phrases.length) {
        setCurrentText(phrases[index]);
      } else {
        clearInterval(interval);
        setShowButtons(true);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Animated background */}
      <div className="background">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="line">
            <div
              className="glow"
              style={{ animationDelay: `${i * 0.3}s` }}
            ></div>
          </div>
        ))}
      </div>

      {/* Navbar */}
      <header className="navbar">
        <img
          src="https://cdn.pixabay.com/photo/2013/12/08/12/12/bitcoin-225080_1280.png"
          alt="Groww"
          className="logo"
        />
        <button
          className="btn btn-green"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          aria-controls="offcanvas"
        >
          About Groww
        </button>
      </header>

      {/* Hero Section */}
      <main className="main-content">
        <h1 className="headline">{currentText}</h1>
        {showButtons && (
          <div className="buttons">
            <a href="#" className="btn btn-dark">
              Read documentation
            </a>
            <a href="#" className="btn btn-green">
              Get started
            </a>
          </div>
        )}
      </main>

      {/* API Section */}
      <section className="api-section">
        <div className="api-card">
          <div className="api-left">
            {apiOptions.map((api, index) => (
              <div
                key={index}
                className={`api-option ${
                  selectedIndex === index ? 'selected' : ''
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                {api.title}
                <br />
                <span>{api.subtitle}</span>
              </div>
            ))}
          </div>
          <div className="api-right">
            <pre>
              <code>{apiOptions[selectedIndex].code}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Performance and Pricing */}
      <section className="speed-section">
        <button className="btn btn-small">Performance</button>
        <h1 style={{ padding: '30px' }}>Unmatched Speed</h1>
        <img
          src="https://resources.groww.in/web-assets/img/stock/performanceFrame.svg"
          alt="Performance"
        />

        <div className="pricing-flip-container">
          <div className="pricing-card">
            <div className="pricing-front">
              <span className="offer-tag">EARLY BIRD OFFER</span>
              <h2 className="pricing-title">Flat pricing for all APIs</h2>
              <ul className="pricing-features">
                <li>✔ Live Market Data and Feed</li>
                <li>✔ Order Management APIs</li>
                <li>✔ Portfolio APIs</li>
                <li>✔ Margin APIs</li>
                <li>✔ Historical Data</li>
              </ul>
              <div className="pricing-cost">
                <p className="original-price">₹2000</p>
                <h1 className="final-price">₹499</h1>
                <p className="price-note">
                  Per <strong>month</strong> plus taxes
                </p>
              </div>
            </div>
            <div className="pricing-back">
              <h3>Why wait?</h3>
              <p>Start building with ultra-low latency APIs now.</p>
              <button className="btn btn-green">Subscribe Now</button>
            </div>
          </div>
          <div className="pricing-buttons">
            <a href="#" className="btn btn-dark">
              Read documentation
            </a>
            <a href="#" className="btn btn-green">
              Get started
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-container">
          <button className="btn btn-small">FAQ</button>
          <h1 style={{ margin: '30px 0' }}>Frequently Asked Questions</h1>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div
                  className="faq-question"
                  onClick={() =>
                    setOpenFAQIndex(openFAQIndex === index ? null : index)
                  }
                >
                  {faq.question}
                </div>
                <div
                  className={`faq-answer ${
                    openFAQIndex === index ? 'open' : ''
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Form */}
      <footer className="footer-form">
        <form className="footer-form-container">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                required
              />
            </div>
          </div>
          <div className="form-group full-width">
            <label htmlFor="address1">Address</label>
            <input
              id="address1"
              type="text"
              placeholder="1234 Main St"
              required
            />
          </div>
          <div className="form-group full-width">
            <label htmlFor="address2">Address 2</label>
            <input
              id="address2"
              type="text"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input id="city" type="text" required />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select id="state" required>
                <option>Choose...</option>
                <option>West Bengal</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip</label>
              <input id="zip" type="text" required />
            </div>
          </div>
          <div className="form-check">
            <input type="checkbox" id="gridCheck" />
            <label htmlFor="gridCheck">Check me out</label>
          </div>
          <div className="submit-area">
            <button type="submit">Sign in</button>
          </div>
          <div className="footer-copy">
            <p>
              &copy; 2016 - {new Date().getFullYear()} Groww. All rights
              reserved. Built with <span style={{ color: '#ff4d4d' }}>♥</span>{' '}
              in India.
            </p>
          </div>
        </form>
      </footer>

      {/* Bootstrap Offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLabel">
            About Groww
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          Groww offers supercharged, easy-to-use APIs for developers to
          integrate investment functionalities like fetching holdings, managing
          orders, accessing live market data, and retrieving historical candle
          data—all with unmatched speed and simplicity. With an affordable Early
          Bird pricing of ₹499/month (plus taxes), Groww supports secure,
          paperless Demat account services and caters to a wide range of
          investment products including mutual funds, stocks, ETFs, IPOs, and
          F&Os. Recognized as India’s No.1 stock broker by active clients (as of
          January 2025), Groww ensures transparent pricing, advanced charting
          tools, and investor safety through SEBI-compliant procedures, secure
          transactions, and awareness on safe trading practices.
        </div>
      </div>
    </div>
  );
}
