const MainNavItems = [
  {
    title: "SITE",
    path: "/site/company",
    child_depth: [
      {
        title: "Company",
        path: "/site/company",
        child_depth: []
      },
      {
        title: "Factory",
        path: "/site/factory",
        child_depth: []
      },
      {
        title: "plant",
        path: "/site/plant",
        child_depth: []
      },
      {
        title: "Operation",
        path: "/site/operation",
        child_depth: []
      },
      {
        title: "Line",
        path: "/site/line",
        child_depth: []
      },
    ]
  },
  {
    title: "Model",
    path: "/model/model",
    child_depth: [
      {
        title: "Model",
        path: "/model/model",
        child_depth: []
      },
      {
        title: "Product",
        path: "/model/product",
        child_depth: []
      },
      {
        title: "Tact Time",
        path: "/model/tac-time",
        child_depth: []
      },
      {
        title: "BOM",
        path: "/model/bom",
        child_depth: [
          {
            title: "BOM",
            path: "/model/bom/bom"
          },
          {
            title: "BOM Structure",
            path: "/model/bom/bom-structure"
          },
          {
            title: "Item List",
            path: "/model/item-list"
          }
        ]
      },
    ]
  },
]

export { MainNavItems }