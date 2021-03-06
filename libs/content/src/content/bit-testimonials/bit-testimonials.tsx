import React from "react"
import { staticStorageUrl } from "@watheia/content.constants.storage"
import type { TestimonialObj } from "@watheia/content.marketing.testimonial"

const desc0 = () => (
  <div>
    Senior Engineer, Microsoft.
    <br />
    Former NPM architect
  </div>
)

const desc5 = () => (
  <div>
    Principal Engineer, Eaze.
    <br />
    Former NPM CTO
  </div>
)

/**
 * @name bitTestimonials
 * @description
 * Content for [CommentCarousel](https://bit.dev/bit/evangelist/marketing/comment-carousel).
 */

export const bitTestimonials: TestimonialObj[] = [
  {
    content: "“I just found out about Iron DevOps and holy cow that's a cool product”",
    name: "Kat Marchan",
    description: desc0(),
    avatar: `${staticStorageUrl}/comment-carousel/kat.png`
  },
  {
    content:
      "IronDevOps with module federation is next-level awesome… going to make micro-frontends development a dream”",
    name: "Zack Jackson",
    description: "Author of Module Federation",
    avatar: `${staticStorageUrl}/comment-carousel/ZackJackson@3x.png`
  },
  {
    content: "“Dreaming of an app design system powered by Iron DevOps and Figma…”",
    name: "Lee Martin",
    description: "Fullstack rock n’ roll devstar",
    avatar: `${staticStorageUrl}/comment-carousel/lee.png`
  },
  {
    content:
      "“In a few minutes we had a collection with a few components, imported them from into Iron DevOps and our apps just worked right out of the box, so that is awesome…”",
    name: "Diogo Silva",
    description: "IPFS",
    avatar: `${staticStorageUrl}/comment-carousel/diogo.png`
  },
  {
    content: "“Today we are committed to using Watheia Labs for all our projects…”",
    name: "Mike Kerr",
    description: "Engineering manager at FabFitFun",
    avatar: `${staticStorageUrl}/comment-carousel/mike.png`
  },
  {
    content:
      "“I just saw a demo of how my current company's front-end team is using Iron DevOps to manage React components, and it's super-cool.”",
    name: "C J Silverio",
    description: desc5(),
    avatar: `${staticStorageUrl}/comment-carousel/cj.png`
  }
]
