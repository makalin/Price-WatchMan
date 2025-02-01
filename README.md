# PriceWatchman

PriceWatchman is a React-based web application that helps users track product prices across various online retailers. Users can add items they want to monitor and set target prices to receive notifications when prices drop to their desired level.

## Features

- Add products to track with custom target prices
- Real-time price monitoring
- SMS notifications when prices reach target levels
- Responsive design that works on both desktop and mobile devices
- Clean, modern UI built with shadcn/ui components
- Visual price history tracking

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A backend service configured to handle API requests
- SMS service configuration for notifications

## Installation

1. Clone the repository:
```bash
git clone https://github.com/makalin/PriceWatchman.git
cd PriceWatchman
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install required UI components:
```bash
npm install @/components/ui
# or
yarn add @/components/ui
```

4. Configure environment variables:
Create a `.env.local` file in the root directory and add:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## Usage

1. Start the development server:
```bash
npm run dev
# or
yarn dev
```

2. Navigate to `http://localhost:3000` in your browser

3. Add items to track by:
   - Entering the product URL
   - Setting a name for the item
   - Specifying your target price

The application will automatically monitor prices and notify you via SMS when they reach your target.

## API Endpoints

The application expects the following API endpoints to be available:

- `GET /api/items/${userId}` - Fetch all tracked items for a user
- `POST /api/items` - Add a new item to track
  ```json
  {
    "url": "string",
    "name": "string",
    "targetPrice": "number",
    "userId": "string",
    "userPhone": "string"
  }
  ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
