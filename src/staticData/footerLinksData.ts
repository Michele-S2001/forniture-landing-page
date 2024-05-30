interface linksList {
  label: string;
  path: string;
}

interface cardFooterLinks {
  footerCardTitle: string;
  footerCardLinks: linksList[];
}


const footerSectionsLinks: cardFooterLinks[] = [
  {
    footerCardTitle: "services",
    footerCardLinks: [
      {
        label: "email marketing",
        path: "#"
      },
      {
        label: "campaigns",
        path: "#"
      },
      {
        label: "branding",
        path: "#"
      },
    ]
  },
  {
    footerCardTitle: "furniture",
    footerCardLinks: [
      {
        label: "beds",
        path: "#"
      },
      {
        label: "chair",
        path: "#"
      },
      {
        label: "all",
        path: "#"
      },
    ]
  },
  {
    footerCardTitle: "follow us",
    footerCardLinks: [
      {
        label: "facebook",
        path: "#"
      },
      {
        label: "twitter",
        path: "#"
      },
      {
        label: "instagram",
        path: "#"
      },
    ]
  }
]

export default footerSectionsLinks;