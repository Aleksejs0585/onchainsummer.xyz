import { MintType } from '@/components/MintDialog/types'
import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '../constants'

const cokeConfig: Partner = {
  slug: 'Coca-Cola',
  name: 'Coca-Cola®',
  url: 'https://www.coca-cola.com/',
  description:
    'Coca-Cola® is bringing artworks from the global Masterpiece campaign onchain with works from emerging artists Aket, WonderBuhle, Fatma Ramadan, Vikram Kushwah, Stefania Tejada, as well as timeless artists like Munch, Vermeer, and Van Gogh.',
  brandColor: '#F40009',
  icon: '/partners/coke/icon.png',
  banner: '/partners/coke/banner-icon.svg',
  aarweaveDigest: 'rXJRpWEegt2wUA9yBsb1tDQnSmgDaVaslHhVE9I-ojw',
  twitter: '@CocaCola',
  drops: [
    {
      startDate: Date.UTC(2023, 7, 13, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.014',
      mintType: MintType.ThirdWeb,
      address: '0x1DdB721BF79d3Ad33fBac72E5dEcf2A436CB42a3',
      crossMintClientId: 'bc474406-4b4c-4ead-8ca2-178826f8e231',
      name: 'Vermeer, "Girl with a Pearl Earring"',
      description:
        'The Masterpiece collection uniquely brings together iconic artworks along with new works from emerging talents, all intertwined with the iconic Coca-Cola bottle. Classic masterpieces like "The Scream" by Edvard Munch and "Girl with a Pearl Earring" by Johannes Vermeer find a harmonious coexistence alongside contemporary works by talented artists like Aket and Vikram Kushwah. Each of these artworks were featured works in Coca-Cola’s Masterpiece Global campaign, and now take on a new dimension as they become digital collectibles, accessible to art enthusiasts participating in Onchain Summer.',
      creator: '0xb12e7dEe5af51d61114c96E50c80afC80CC26595',
      image: '/partners/coke/drop/vermeer.jpg',
      type: 'erc-721',
      interactWithNFTLink:
        'https://nft.coinbase.com/collection/base/0x1DdB721BF79d3Ad33fBac72E5dEcf2A436CB42a3',
    },
    {
      startDate: Date.UTC(2023, 7, 13, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0011',
      mintType: MintType.ThirdWeb,
      address: '0x916555Cd5F02E159b84d5247F8660531A4525d2d',
      crossMintClientId: '3175e2b9-f7f6-4311-8611-2e94fda2dc62',
      name: 'Aket, "Divine Idyll"',
      description:
        'The Masterpiece collection uniquely brings together iconic artworks along with new works from emerging talents, all intertwined with the iconic Coca-Cola bottle. Classic masterpieces like "The Scream" by Edvard Munch and "Girl with a Pearl Earring" by Johannes Vermeer find a harmonious coexistence alongside contemporary works by talented artists like Aket and Vikram Kushwah. Each of these artworks were featured works in Coca-Cola’s Masterpiece Global campaign, and now take on a new dimension as they become digital collectibles, accessible to art enthusiasts participating in Onchain Summer.',
      creator: '0xb12e7dEe5af51d61114c96E50c80afC80CC26595',
      image: '/partners/coke/drop/aket.jpg',
      type: 'erc-721',
      interactWithNFTLink:
        'https://nft.coinbase.com/collection/base/0x916555Cd5F02E159b84d5247F8660531A4525d2d',
    },
    {
      startDate: Date.UTC(2023, 7, 13, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0011',
      mintType: MintType.ThirdWeb,
      address: '0x32cF27F2753e90948195b64EC55C486EE640cF61',
      crossMintClientId: 'd50ceda8-7fd1-4587-812a-6611b210c484',
      name: `Wonder Buhle, "You Can't Curse Me"`,
      description:
        'The Masterpiece collection uniquely brings together iconic artworks along with new works from emerging talents, all intertwined with the iconic Coca-Cola bottle. Classic masterpieces like "The Scream" by Edvard Munch and "Girl with a Pearl Earring" by Johannes Vermeer find a harmonious coexistence alongside contemporary works by talented artists like Aket and Vikram Kushwah. Each of these artworks were featured works in Coca-Cola’s Masterpiece Global campaign, and now take on a new dimension as they become digital collectibles, accessible to art enthusiasts participating in Onchain Summer.',
      creator: '0xb12e7dEe5af51d61114c96E50c80afC80CC26595',
      image: '/partners/coke/drop/wonder.jpg',
      type: 'erc-721',
      interactWithNFTLink:
        'https://nft.coinbase.com/collection/base/0x32cF27F2753e90948195b64EC55C486EE640cF61',
    },
    {
      startDate: Date.UTC(2023, 7, 13, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0011',
      mintType: MintType.ThirdWeb,
      address: '0xe4c3AA3978B61431C070109629a687bc42D66d8f',
      crossMintClientId: '821e2e96-2fa7-4138-b079-a2d4ccacedd2',
      name: 'Fatma Ramadan, "The Blow Dryer"',
      description:
        'The Masterpiece collection uniquely brings together iconic artworks along with new works from emerging talents, all intertwined with the iconic Coca-Cola bottle. Classic masterpieces like "The Scream" by Edvard Munch and "Girl with a Pearl Earring" by Johannes Vermeer find a harmonious coexistence alongside contemporary works by talented artists like Aket and Vikram Kushwah. Each of these artworks were featured works in Coca-Cola’s Masterpiece Global campaign, and now take on a new dimension as they become digital collectibles, accessible to art enthusiasts participating in Onchain Summer.',
      creator: '0xb12e7dEe5af51d61114c96E50c80afC80CC26595',
      image: '/partners/coke/drop/fatam.jpg',
      type: 'erc-721',
      interactWithNFTLink:
        'https://nft.coinbase.com/collection/base/0xe4c3AA3978B61431C070109629a687bc42D66d8f',
    },
    {
      startDate: Date.UTC(2023, 7, 13, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0011',
      mintType: MintType.ThirdWeb,
      address: '0x766D25d7005e6B690C0ab4FA1e81a2eB9B416c50',
      crossMintClientId: '9aec386b-7c17-46b6-afa5-f926bd85cb56',
      name: 'Vikram Kushwah, "Falling in Library"',
      description:
        'The Masterpiece collection uniquely brings together iconic artworks along with new works from emerging talents, all intertwined with the iconic Coca-Cola bottle. Classic masterpieces like "The Scream" by Edvard Munch and "Girl with a Pearl Earring" by Johannes Vermeer find a harmonious coexistence alongside contemporary works by talented artists like Aket and Vikram Kushwah. Each of these artworks were featured works in Coca-Cola’s Masterpiece Global campaign, and now take on a new dimension as they become digital collectibles, accessible to art enthusiasts participating in Onchain Summer.',
      creator: '0xb12e7dEe5af51d61114c96E50c80afC80CC26595',
      image: '/partners/coke/drop/vikram.jpg',
      type: 'erc-721',
      interactWithNFTLink:
        'https://nft.coinbase.com/collection/base/0x766D25d7005e6B690C0ab4FA1e81a2eB9B416c50',
    },
    {
      startDate: Date.UTC(2023, 7, 13, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0011',
      mintType: MintType.ThirdWeb,
      address: '0x19766E9DA39ecb68b85b9B4aF3B0cE4f9a4F2ECf',
      crossMintClientId: '52cafd63-fa06-492a-b5e7-7b509f852391',
      name: 'Stefania Tejada, "Natural Encounters"',
      description:
        'The Masterpiece collection uniquely brings together iconic artworks along with new works from emerging talents, all intertwined with the iconic Coca-Cola bottle. Classic masterpieces like "The Scream" by Edvard Munch and "Girl with a Pearl Earring" by Johannes Vermeer find a harmonious coexistence alongside contemporary works by talented artists like Aket and Vikram Kushwah. Each of these artworks were featured works in Coca-Cola’s Masterpiece Global campaign, and now take on a new dimension as they become digital collectibles, accessible to art enthusiasts participating in Onchain Summer.',
      creator: '0xb12e7dEe5af51d61114c96E50c80afC80CC26595',
      image: '/partners/coke/drop/stefania.jpg',
      type: 'erc-721',
      interactWithNFTLink:
        'https://nft.coinbase.com/collection/base/0x19766E9DA39ecb68b85b9B4aF3B0cE4f9a4F2ECf',
    },
    {
      startDate: Date.UTC(2023, 7, 13, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.014',
      mintType: MintType.ThirdWeb,
      address: '0x9A466C55F0cFC8Ea3cEE03DE0EB94Bf35A934522',
      crossMintClientId: '7ff982f7-fd53-4290-a28c-896af1a59e63',
      name: 'Munch, "The Scream"',
      description:
        'The Masterpiece collection uniquely brings together iconic artworks along with new works from emerging talents, all intertwined with the iconic Coca-Cola bottle. Classic masterpieces like "The Scream" by Edvard Munch and "Girl with a Pearl Earring" by Johannes Vermeer find a harmonious coexistence alongside contemporary works by talented artists like Aket and Vikram Kushwah. Each of these artworks were featured works in Coca-Cola’s Masterpiece Global campaign, and now take on a new dimension as they become digital collectibles, accessible to art enthusiasts participating in Onchain Summer.',
      creator: '0xb12e7dEe5af51d61114c96E50c80afC80CC26595',
      image: '/partners/coke/drop/munch.jpg',
      type: 'erc-721',
      interactWithNFTLink:
        'https://nft.coinbase.com/collection/base/0x9A466C55F0cFC8Ea3cEE03DE0EB94Bf35A934522',
    },
    {
      startDate: Date.UTC(2023, 7, 13, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.014',
      mintType: MintType.ThirdWeb,
      address: '0x65b2E459f779FF4af4e4A16bc8065A0063cF8221',
      crossMintClientId: 'e1972387-666c-4f23-8a35-78eb3d8004f4',
      name: 'Van Gogh, "Bedroom in Arles"',
      description:
        'The Masterpiece collection uniquely brings together iconic artworks along with new works from emerging talents, all intertwined with the iconic Coca-Cola bottle. Classic masterpieces like "The Scream" by Edvard Munch and "Girl with a Pearl Earring" by Johannes Vermeer find a harmonious coexistence alongside contemporary works by talented artists like Aket and Vikram Kushwah. Each of these artworks were featured works in Coca-Cola’s Masterpiece Global campaign, and now take on a new dimension as they become digital collectibles, accessible to art enthusiasts participating in Onchain Summer.',
      creator: '0xb12e7dEe5af51d61114c96E50c80afC80CC26595',
      image: '/partners/coke/drop/vangogh.jpg',
      type: 'erc-721',
      interactWithNFTLink:
        'https://nft.coinbase.com/collection/base/0x65b2E459f779FF4af4e4A16bc8065A0063cF8221',
    },
  ],
}

export default cokeConfig
