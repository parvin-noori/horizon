import { Button, Card, CardBody, Image } from "@heroui/react";
import ProductsBanner from "/imgs/ProductsBanner.png";

export default function Banner() {
  return (
    <Card>
      <Image remove src={ProductsBanner} alt="Products Banner" />
      <CardBody className="absolute flex flex-col z-10 text-white xl:w-1/2 md:4/6 space-y-3 top-1/2 -translate-y-1/2 start-10">
        <h3 className="text-3xl">
          Discover, collect, and sell extraordinary NFTs
        </h3>
        <p className="text-slate-200">
          Enter in this creative world. discover now the latest NFTs or start
          creating your own.
        </p>
        <div className="flex items-center space-x-3 mt-5">
          <Button size="lg" className="bg-white">
            Discover now
          </Button>
          <Button size="lg" color="white" variant="light">
            Watch video
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
