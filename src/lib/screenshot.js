export const captureScreenshot = (viewRef) => {
    const viewElement = viewRef.current;
    const canvas = document.createElement('canvas');
    const { clientWidth, clientHeight } = viewElement;

    canvas.width = clientWidth;
    canvas.height = clientHeight;

    const context = canvas.getContext('2d');
    context.drawImage(viewElement, 0, 0, clientWidth, clientHeight);

    const screenshotDataUrl = canvas.toDataURL();

    // Experiment Thumbnail: Use the screenshot data URL (e.g., save it as an image or display it)
    console.log(screenshotDataUrl)
};
