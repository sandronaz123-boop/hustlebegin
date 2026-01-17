export function getAmazonAffiliateLink(productId: string): string {
  const affiliateId = process.env.AMAZON_AFFILIATE_ID ?? 'hustlebegin-20';
  return `https://www.amazon.com/dp/${productId}?tag=${affiliateId}`;
}

export function getClickBankAffiliateLink(vendor: string, product: string): string {
  const affiliateId = process.env.CLICKBANK_AFFILIATE_ID ?? 'hustlebegin';
  return `https://${affiliateId}.${vendor}.hop.clickbank.net/?cbpage=${product}`;
}

export const affiliateDisclaimer = `Some links in this article are affiliate links. This means we may earn a small commission if you make a purchase, at no extra cost to you. We only recommend products we genuinely believe in.`;
