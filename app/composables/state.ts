import { type CareerSiteConfig, type SEOConfig } from '~~/shared/schemas/setting';

export function useRemoteAssetBaseState() {
  return useState<string>('remote-asset-base-url');
}

export function useOnboardingStatusState() {
  return useState<boolean>('onboarding-status', () => false);
}

export function useTotalActivePostingsState() {
  return useState<number>('total-active-postings', () => 0);
}

export function useCareerSiteConfigObjectState() {
  return useObjectState<CareerSiteConfig>('career-site-config');
}

export function useSeoConfigObjectState() {
  return useObjectState<SEOConfig>('seo-config');
}

export function useObjectState<T>(key: string, initFn?: () => T) {
  const data = useState<T>(key, initFn);
  const firstFetched = useState<boolean>(`${key}-first-fetch`, () => false);
  const fetching = useState<boolean>(`${key}-fetching`, () => false);
  const changing = useState<boolean>(`${key}-changing`, () => false);

  const setData = (d: T) => {
    firstFetched.value = true;
    data.value = d;
  };

  return { data, setData, firstFetched, fetching, changing };
}
