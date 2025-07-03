# Currency Converter

A simple and stylish web-based currency converter built with HTML, CSS, and JavaScript. Instantly convert between currencies using real-time exchange rates and see country flags for each currency.

---

## Features

- **Live Exchange Rates:** Fetches up-to-date rates from a public API.
- **Currency Selection:** Choose from a wide range of world currencies.
- **Country Flags:** Displays country flags for selected currencies.
- **Responsive Design:** Works well on desktop and mobile devices.
- **User-Friendly UI:** Clean and modern interface.

---

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Aryanj0202/Currency-converter.git
cd Currency-converter
```

### 2. Open the Project

You can open the folder in [Visual Studio Code](https://code.visualstudio.com/) or any code editor.

### 3. Run Locally

Just open `index.html` in your web browser.  
No server or build step is required.

---

## Project Structure

```
Currency Converter/
│
├── index.html        # Main HTML file
├── style.css         # Stylesheet for the app
├── app.js            # Main JavaScript logic
└── codes.js          # Currency code and country mapping
```

---

## How It Works

- **index.html:**  
  Contains the structure of the currency converter, including the form, dropdowns, and display area.

- **style.css:**  
  Styles the converter with a modern, responsive look.

- **codes.js:**  
  Provides a mapping of currency codes to country codes for flag display.

- **app.js:**  
  Handles fetching exchange rates, updating the UI, and managing user interactions.

---

## API Used

- [Fawaz Ahmed's Currency API](https://github.com/fawazahmed0/currency-api)  
  Used for fetching real-time exchange rates.

---

## Customization

- **Add/Remove Currencies:**  
  Edit `codes.js` to add or remove supported currencies.

- **Change Default Currencies:**  
  In `app.js`, modify the logic that sets the default selected options.

---

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Credits

- [Font Awesome](https://fontawesome.com/) for icons.
- [Flags API](https://flagsapi.com/) for country flags.
- [Fawaz Ahmed's Currency API](https://github.com/fawazahmed0/currency-api) for exchange rates.

---

## Contact

For questions or suggestions, open an issue or contact [Aryanj0202](https://github.com/Aryanj0202).
