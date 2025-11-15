"use client";
import CartCard from "@/components/cards/CartCard";
import FavoriteItemCard from "@/components/cards/FavoriteItemCard";
import OrderSummaryCard from "@/components/cards/OrderSummaryCard";
import EcommerceHeader from "@/components/elements/EcommerceHeader";
import StarsParticlesHeroSection from "@/components/elements/StarsParticlesHeroSection";
import GenericProductDetails from "@/components/miscellaneous/GenericProductDetails";
import Cart from "@/components/navigation/Cart";
import useTheme from "@/hooks/useTheme";
import { mockedProductDetails, mockedProducts } from "@/mocks";
import { useState } from "react";

export default function Home() {
  const [openCart, setOpenCart] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleToggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className="font-sans overflow-x-hidden">
      <main className="flex flex-col">
        <EcommerceHeader.Root>
          <EcommerceHeader.LeftContainer></EcommerceHeader.LeftContainer>
          <EcommerceHeader.RightContainer>
            <EcommerceHeader.CartButton
              onClick={handleToggleCart}
            ></EcommerceHeader.CartButton>
          </EcommerceHeader.RightContainer>
        </EcommerceHeader.Root>
        <StarsParticlesHeroSection
          className="bg-gradient-to-b from-primar-500 to-black"
          animationSpeed="slow"
          children={
            <div className="w-full flex flex-col justify-center items-center gap-6 z-10 relative p-8">
              <button className="bg-transparent border-primary-500 border-2 hover:bg-primary-500 w-fit p-4 rounded-md text-white">
                Hover me
              </button>
              <span className="text-white">Welcome to our page</span>
            </div>
          }
        />
        <button onClick={handleToggleTheme}>Toggle theme</button>
        <Cart
          onToggleOpen={handleToggleCart}
          isOpen={openCart}
          products={mockedProducts}
        />
        <GenericProductDetails product={mockedProductDetails[0]} />
        <div className="p-6 flex flex-col gap-6">
          <CartCard products={mockedProducts} />
          <OrderSummaryCard
            items={mockedProducts}
            onCheckout={() => console.log("checkout")}
          />
          <FavoriteItemCard
            product={mockedProducts[0]}
            onRemoveItem={() => console.log("Item removed from favorites")}
            onShareItem={(url) => console.log("Share URL:", url)}
          />
        </div>
      </main>
    </div>
  );
}
