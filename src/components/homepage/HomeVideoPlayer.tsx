const HomeVideoPlayer = () => {
  return (
    <div className="py-16 md:py-20 lg:py-24 xl:py-[100px] container xl:max-w-[1188px]">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2v-sgzsy8sw?si=uoWlDbtuKHl9-AfF&amp;start=13"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className={`w-full xl:min-h-[657.73px] xl:max-h-[657.73px] lg:min-h-[500px] lg:max-h-[500px] min-h-[350px] max-h-[350px] h-full`}>
      </iframe>
    </div>
  );
};

export default HomeVideoPlayer;
