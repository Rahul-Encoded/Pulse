import { TableCell, TableRow } from "@/components/ui/table";

export default function TabRow() {
  return (
    <TableRow className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
      <TableCell className="p-0">
        <div className="flex flex-row w-full gap-[12px] pl-[12px] pr-[12px] sm:pr-[16px] pt-[12px] pb-[2px] justify-start items-center">
          {/* Left Section: Image and Badge */}
          <div className="flex flex-col items-center gap-[4px]">
            <div className="relative w-[74px] h-[74px] justify-center items-center">
              <span className="contents">
                <div className="flex bg-pump absolute bottom-[-4px] right-[-4px] p-[1px] w-[16px] h-[16px] justify-center items-center rounded-full z-30">
                  <div className="flex justify-center items-center bg-background absolute w-[14px] h-[14px] rounded-full z-30">
                    <img
                      alt="Pump V1"
                      loading="eager"
                      width="10"
                      height="10"
                      src="https://axiom.trade/images/pump.svg"
                      className="color-transparent object-cover"
                    />
                  </div>
                </div>
              </span>
              <div className="bg-pump/20 absolute flex p-[1px] justify-start items-center rounded-[4px] z-20">
                <div className="bg-backgroundSecondary flex p-[2px] justify-start items-center rounded-[3px]">
                  <div className="w-[68px] h-[68px] flex-shrink-0 group/image relative">
                    <div className="w-full h-full relative">
                      <div className="pointer-events-none border-textPrimary/10 border-[1px] absolute w-[68px] h-[68px] z-10 rounded-[1px]"></div>
                      <img
                        alt="lupin"
                        loading="eager"
                        width="68"
                        height="68"
                        className="rounded-[1px] w-[68px] h-[68px] object-cover"
                        src="https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/FvU6WbkQZhmrphLfwygwMYzrTHLEJyxuPoFU593Lpump.webp"
                      />
                      <button className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <i className="ri-camera-line text-white text-[24px]"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-[74px] h-[74px] rounded-[4px] z-10 flex items-center justify-center">
                <div className="inline-flex items-center justify-center">
                  <svg width="78" height="78" viewBox="0 0 78 78">
                    <path
                      className="text-pump opacity-40"
                      stroke="currentColor"
                      fill="transparent"
                      strokeWidth="1"
                      d="M 76 76 L 6 76 Q 2 76 2 72 L 2 6 Q 2 2 6 2 L 72 2 Q 76 2 76 6 L 76 72 Q 76 76 76 76"
                    />
                    <path
                      className="text-pump transition-all duration-300 ease-in-out"
                      stroke="currentColor"
                      fill="transparent"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeDasharray="296"
                      strokeDashoffset="279.3648"
                      d="M 76 76 L 6 76 Q 2 76 2 72 L 2 6 Q 2 2 6 2 L 72 2 Q 76 2 76 6 L 76 72 Q 76 76 76 76"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <span className="contents">
              <span className="text-textTertiary text-[12px] font-medium text-center max-w-[74px]">
                <button
                  type="button"
                  className="text-textTertiary hover:text-primaryBlueHover transition-colors duration-[125ms] text-[12px] font-medium text-center max-w-[74px] flex items-center gap-[4px] group/copy"
                >
                  <span>EKyT...tFMf</span>
                </button>
              </span>
            </span>
          </div>

          {/* Right Section: Details */}
          <div className="flex flex-col flex-1 h-full gap-[20px] justify-start items-start pt-[0px] pb-[12px] overflow-hidden">
            <div className="flex flex-col w-full gap-[2px] justify-start items-start min-w-0">
              <div className="flex flex-row min-h-[18px] w-full gap-[4px] justify-between items-start min-w-0">
                <div className="overflow-hidden">
                  <div
                    className="justify-start items-start"
                    style={{ minWidth: "93px" }}
                  >
                    <div className="flex flex-row gap-[4px] justify-start items-center">
                      <div
                        className="min-w-0 whitespace-nowrap overflow-hidden truncate text-textPrimary text-[16px] font-medium tracking-[-0.02em]"
                        style={{ maxWidth: "120px" }}
                      >
                        lupin
                      </div>
                      <div className="min-w-0 flex-1 overflow-hidden">
                        <button
                          type="button"
                          className="flex flex-row gap-[4px] justify-start items-center text-textTertiary hover:text-primaryBlueHover transition-colors duration-[125ms] min-w-0 overflow-hidden"
                        >
                          <div className="min-w-0 whitespace-nowrap overflow-hidden truncate text-inherit text-[16px] sm:text-[16px] lg:text-[14px] xl:text-[16px] text-left font-medium tracking-[-0.02em] xl:truncate xl:max-w-full block">
                            lupin
                          </div>
                          <i className="text-inherit ri-file-copy-fill text-[14px]"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row w-full h-[18px] gap-[12px] lg:gap-[8px] xl:gap-[12px] justify-start items-center">
                <div className="flex items-center gap-[8px]">
                  <span className="text-primaryGreen text-[14px] font-medium">
                    9s
                  </span>
                </div>
                <div className="flex flex-row flex-shrink-0 gap-[8px] justify-start items-center [&_i]:text-[16px]">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row flex-shrink-0 gap-[2px] justify-start items-center cursor-pointer"
                  >
                    <i
                      className="ri-quill-pen-line transition-colors duration-[125ms] ease-in-out"
                      style={{ fontSize: "16px", color: "rgb(16, 185, 129)" }}
                    ></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      alt="YouTube"
                      draggable="false"
                      width="16"
                      height="16"
                      className="hover:brightness-110 transition-brightness ease-in-out duration-125 min-w-[16px] min-h-[16px]"
                      src="/images/youtube-large.svg"
                    />
                  </a>
                  <div className="flex flex-row gap-[4px] justify-start items-center">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <i
                        className="icon-pill text-textSecondary hover:text-primaryBlueHover transition-colors duration-[125ms]"
                        style={{ fontSize: "16px" }}
                      ></i>
                    </a>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <i className="text-textSecondary ri-search-line text-[16px] hover:text-primaryBlueHover transition-colors duration-[125ms]"></i>
                  </a>
                </div>

                {/* Desktop Stats */}
                <div className="flex-row flex-1 h-[18px] gap-[8px] justify-start items-center hidden sm:flex md:hidden lg:hidden xl:flex">
                  <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center">
                    <i className="text-textTertiary ri-group-line text-[16px]"></i>
                    <span className="text-[12px] font-medium text-white">
                      2
                    </span>
                  </div>
                  <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0">
                    <div className="flex justify-center items-center min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]">
                      <i
                        className="icon-pro-trader text-textTertiary text-[16px]"
                        style={{ fontSize: "14px" }}
                      ></i>
                    </div>
                    <span className="text-textPrimary text-[12px] font-medium">
                      1
                    </span>
                  </div>
                  <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0">
                    <i className="ri-trophy-line text-textTertiary text-[16px]"></i>
                    <span className="text-textPrimary text-[12px] font-medium">
                      0
                    </span>
                  </div>
                  <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center cursor-pointer">
                    <i className="text-textTertiary ri-vip-crown-2-line text-[16px] pb-[1.2px]"></i>
                    <span className="text-textPrimary text-[12px] font-medium">
                      0/130
                    </span>
                  </div>
                  <div className="inline-flex items-center justify-center gap-1 text-textSecondary leading-none">
                    <i className="ri-eye-line text-[9px] sm:text-[16px] flex items-center"></i>
                    <span className="text-[11px] sm:text-[11px] font-medium flex items-center">
                      1
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile/Small Stats */}
              <div className="flex sm:hidden md:flex lg:flex xl:hidden flex-row flex-1 h-[18px] gap-[8px] justify-start items-center pt-[3px]">
                <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center">
                  <i className="text-textTertiary ri-group-line text-[16px]"></i>
                  <span className="text-[12px] font-medium text-white">2</span>
                </div>
                <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0">
                  <img
                    alt="Pro Traders"
                    width="16"
                    height="16"
                    className="w-[16px] h-[16px] object-cover"
                    src="https://axiom.trade/images/material-symbols-candlestick-chart.svg"
                  />
                  <span className="text-textPrimary text-[12px] font-medium">
                    1
                  </span>
                </div>
                <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0">
                  <i className="ri-trophy-line text-textTertiary text-[16px]"></i>
                  <span className="text-textPrimary text-[12px] font-medium">
                    0
                  </span>
                </div>
                <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center cursor-pointer">
                  <i className="text-textTertiary ri-vip-crown-2-line text-[16px] pb-[1.2px]"></i>
                  <span className="text-textPrimary text-[12px] font-medium">
                    0/130
                  </span>
                </div>
                <div className="inline-flex items-center justify-center gap-1 text-textSecondary leading-none">
                  <i className="ri-eye-line text-[9px] sm:text-[16px] flex items-center"></i>
                  <span className="text-[11px] sm:text-[11px] font-medium flex items-center">
                    1
                  </span>
                </div>
              </div>
            </div>

            {/* Badges Section */}
            <div className="hidden sm:flex md:hidden lg:hidden xl:flex flex-row w-full h-[24px] gap-[4px] justify-start items-end">
              <div className="flex flex-row gap-[4px] flex-shrink-0 h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
                <i className="ri-user-star-line text-[14px] text-primaryGreen"></i>
                <span className="text-primaryGreen text-[12px] font-medium">
                  4%
                </span>
              </div>
              <div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
                <div className="w-[16px] h-[16px] flex items-center justify-center">
                  <i
                    className="icon-chef-hat text-primaryGreen"
                    style={{ fontSize: "12px" }}
                  ></i>
                </div>
                <span className="text-primaryGreen text-[12px] font-medium">
                  4%
                </span>
                <span className="text-textSecondary text-[11px] leading-[16px] font-medium whitespace-nowrap">
                  5mo
                </span>
              </div>
              <div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
                <i className="ri-crosshair-2-line text-[14px] text-primaryGreen"></i>
                <span className="text-primaryGreen text-[12px] font-medium">
                  4%
                </span>
              </div>
              <div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
                <i className="ri-ghost-line text-[14px] text-primaryGreen"></i>
                <span className="text-primaryGreen text-[12px] font-medium">
                  0%
                </span>
              </div>
              <div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
                <div className="flex justify-center items-center min-w-[14px] min-h-[14px] max-w-[14px] max-h-[14px]">
                  <i
                    className="icon-boxes text-[14px] text-primaryGreen"
                    style={{ fontSize: "12px" }}
                  ></i>
                </div>
                <span className="text-primaryGreen text-[12px] font-medium">
                  0%
                </span>
              </div>
            </div>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
