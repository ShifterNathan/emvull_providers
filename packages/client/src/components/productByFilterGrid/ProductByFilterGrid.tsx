import React, { useEffect, useRef, useState } from "react";
import ProductFilterGridItem from "./ProductFilterGridItem";

const ProductByFilterGrid = (props: any) => {
  const { className } = props;

  type TabsRef = {
    [key: string]: HTMLButtonElement | null;
  };

  type ImageSourceType = {
    [key: string]: {
      imgSrc: string;
      productCategory: string;
      productName: string;
      productPrice: string;
    }[];
  };

  const [activeTab, setActiveTab] = useState<{
    showName: string;
    internalName: string;
  }>({ showName: "ALL", internalName: "all" });
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabsRef = useRef<TabsRef>({});
  const tabs = [
    { showName: "ALL", internalName: "all" },
    { showName: "WOMAN", internalName: "woman" },
    { showName: "MAN", internalName: "man" },
    { showName: "ON SALE", internalName: "onSale" },
    { showName: "NEW", internalName: "new" },
  ];

  const updateUnderlineStyle = (tab: any) => {
    const tabRef = tabsRef.current[tab];
    const styles = {
      left: tabRef?.offsetLeft + "px",
      width: tabRef?.offsetWidth + "px",
    };
    setUnderlineStyle(styles);
  };

  useEffect(() => {
    updateUnderlineStyle(activeTab);
  }, [activeTab]);

  const imageSources: ImageSourceType = {
    all: [
      {
        imgSrc: "https://source.unsplash.com/random/1",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/2",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/3",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/4",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/5",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/6",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/7",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/8",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
    ],
    woman: [
      {
        imgSrc: "https://source.unsplash.com/random/1",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/2",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/3",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/4",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/5",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/6",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/7",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/8",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
    ],
    man: [
      {
        imgSrc: "https://source.unsplash.com/random/1",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/2",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/3",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/4",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/5",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/6",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/7",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/8",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
    ],
    onSale: [
      {
        imgSrc: "https://source.unsplash.com/random/1",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/2",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/3",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/4",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/5",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/6",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/7",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/8",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
    ],
    new: [
      {
        imgSrc: "https://source.unsplash.com/random/1",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/2",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/3",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/4",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/5",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/6",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/7",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
      {
        imgSrc: "https://source.unsplash.com/random/8",
        productCategory: "ACCESORIOS, BOLSAS",
        productName: "STAU774 – RE-Tote Bag",
        productPrice: "7.95€ IVA",
      },
    ],
  };
  return (
    <div
      className={` w-9/12 flex flex-col items-center justify-center ${className}`}
    >
      <h3 className="text-3xl font-bold pb-2">Trendy Item</h3>
      <div className="relative pb-6">
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.showName}
              ref={(el) => (tabsRef.current[tab.showName] = el)}
              className={`pb-2 ${
                activeTab.showName === tab.showName
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.showName}
            </button>
          ))}
        </div>
        <div
          className="absolute h-1 bg-black transition-all duration-300 ease-out"
          style={{ ...underlineStyle }}
        />
      </div>
      <div
        key={activeTab.internalName}
        className={`w-full grid grid-cols-2 grid-rows-4 gap-x-10 gap-y-4 md:gap-x-0 place-items-center xl:grid-cols-4 xl:grid-rows-2 animate-fade-in`}
      >
        {imageSources[activeTab.internalName].map((product, i) => {
          return (
            <section className="flex flex-col">
              <ProductFilterGridItem imgSrc={product.imgSrc} />
              <div className="flex w-full flex-col items-start justify-center mt-2">
                <h5>{product.productCategory}</h5>
                <h3>{product.productName}</h3>
                <p>{product.productPrice}</p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default ProductByFilterGrid;
