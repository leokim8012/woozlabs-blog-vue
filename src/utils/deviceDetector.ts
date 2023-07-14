const userAgent: string = navigator.userAgent || navigator.vendor;

export const isMobileDevice = (): boolean => {
  const regexs = [
    /(Android)(.+)(Mobile)/i,
    /BlackBerry/i,
    /iPhone|iPod/i,
    /Opera Mini/i,
    /IEMobile/i,
  ];
  return regexs.some((b) => userAgent.match(b));
};

export const isTabletDevice = (): boolean => {
  const regex =
    /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/;
  return regex.test(userAgent.toLowerCase());
};

export const isDesktopDevice = (): boolean =>
  !isMobileDevice() && !isTabletDevice();
