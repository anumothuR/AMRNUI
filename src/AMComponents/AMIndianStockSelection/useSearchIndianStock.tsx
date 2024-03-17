import { useState, useEffect } from 'react';
import axios from 'axios';
import CookieManager from '@react-native-cookies/cookies';
import type { Company } from './types';

const useSearchIndianStock = (qury: string) => {
  const [companiesData, setCompaniesData] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookieURL = `https://www.nseindia.com`;
        if (!CookieManager.get(cookieURL)) {
          const response = await axios.get(cookieURL, {
            withCredentials: true,
          });
          const cookies = response.headers['set-cookie'];
          if (cookies) {
            await CookieManager.setFromResponse(
              cookieURL,
              cookies[0] as string
            );
          }
        }
        const apiUrl = `https://www.nseindia.com/api/search/autocomplete?q=${qury}`;
        const result = await axios.get(apiUrl);
        if (result.data) {
          const companies = result.data.symbols.filter((symbol: Company) =>
            symbol.activeSeries.includes('EQ')
          );
          setCompaniesData(companies);
        }
        // eslint-disable-next-line no-catch-shadow
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      // Cleanup function
    };
  }, [qury]);

  return { companiesData, loading, error };
};

export default useSearchIndianStock;
