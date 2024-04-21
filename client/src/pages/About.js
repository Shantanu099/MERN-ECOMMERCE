import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.jpg"
            alt="contactus"
            style={{ width: "87%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to Electronics Store your premier destination for quality
            products and seamless online shopping. Discover a curated selection
            spanning fashion, electronics, and home decor. We prioritize
            quality, collaborating with trusted brands to ensure your
            satisfaction. Our user-friendly site guarantees an effortless
            experience, and our dedicated customer support is always ready to
            assist. Join our community on social media for the latest trends and
            updates. At Electronics Store, we're not just an online store we're
            your trusted partner in finding the perfect items. Explore, shop,
            and enjoy the convenience of exceptional service. Happy shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
