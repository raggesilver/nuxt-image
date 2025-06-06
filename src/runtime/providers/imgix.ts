import { joinURL } from 'ufo'
import { defineProvider, createOperationsGenerator } from '#image'

export const operationsGenerator = createOperationsGenerator({
  keyMap: {
    width: 'w',
    height: 'h',
    format: 'fm',
    quality: 'q',
    backgroundColor: 'bg',
    rotate: 'rot',
    mask: 'mask',
    auto: 'auto',
    crop: 'crop',
    brightness: 'bri',
    contrast: 'con',
    exposure: 'exp',
    gamma: 'gam',
    highlight: 'high',
    hueShift: 'hue',
    invert: 'invert',
    saturation: 'sat',
    shadow: 'shad',
    sharpen: 'sharp',
    unsharpMask: 'usm',
    unsharpMaskRadius: 'usmrad',
    vibrance: 'vib',
    blend: 'blend',
    blendAlign: 'blend-align',
    blendAlpha: 'blend-alpha',
    blendColor: 'blend-color',
    blendCrop: 'blend-crop',
    blendFit: 'blend-fit',
    blendHeight: 'blend-h',
    blendMode: 'blend-mode',
    blendPadding: 'blend-pad',
    blendSize: 'blend-size',
    blendWidth: 'blend-w',
    blendXPosition: 'blend-x',
    blendYPosition: 'blend-y',
    padding: 'pad',
    borderBottom: 'border-bottom',
    borderLeft: 'border-left',
    innerBorderRadius: 'border-radius-inner',
    outerBorderRadius: 'border-radius',
    borderRight: 'border-right',
    borderTop: 'border-top',
    borderSizeColor: 'border',
    paddingBottom: 'pad-bottom',
    paddingLeft: 'pad-left',
    paddingRight: 'pad-right',
    paddingTop: 'pad-top',
    paletteColorCount: 'colors',
    colorPaletteExtraction: 'palette',
    cssPrefix: 'prefix',
    expirationTimestamp: 'expires',
    faceIndex: 'faceindex',
    facePadding: 'facepad',
    jsonFaceData: 'faces',
    fillMode: 'fill',
    fillColor: 'fill-color',
    gridColors: 'grid-colors',
    gridSize: 'grid-size',
    transparency: 'transparency',
    focalPointDebug: 'fp-debug',
    focalPointXPosition: 'fp-x',
    focalPointYPosition: 'fp-y',
    focalPointZoom: 'fp-z',
    clientHints: 'ch',
    chromaSubsampling: 'chromasub',
    colorQuantization: 'colorquant',
    colorSpace: 'cs',
    download: 'dl',
    dotsPerInch: 'dpi',
    losslessCompression: 'lossless',
    maskBackgroundColor: 'mask-bg',
    maskCornerRadius: 'corner-radius',
    noiseReductionSharp: 'nrs',
    noiseReductionBound: 'nr',
    pdfPageNumber: 'page',
    pdfAnnotation: 'pdf-annotation',
    pixelDensity: 'dpr',
    orientation: 'orient',
    flipAxis: 'flip',
    aspectRatio: 'ar',
    maximumHeight: 'max-h',
    maximumWidth: 'max-w',
    minimumHeight: 'min-h',
    minimumWidth: 'min-w',
    sourceRectangleRegion: 'rect',
    gaussianBlur: 'blur',
    duotoneAlpha: 'duotone-alpha',
    duotone: 'duotone',
    halftone: 'htn',
    monochrome: 'monochrome',
    pixellate: 'px',
    sepiaTone: 'sepia',
    textAlign: 'txt-align',
    textClippingMode: 'txt-clip',
    textColor: 'txt-color',
    textFitMode: 'txt-fit',
    textFont: 'txt-font',
    textLigatures: 'txt-lig',
    textOutlineColor: 'txt-line-color',
    textOutline: 'txt-line',
    textPadding: 'txt-pad',
    textShadow: 'txt-shad',
    textFontSize: 'txt-size',
    textWidth: 'txt-width',
    textString: 'txt',
    trimColor: 'trim-color',
    trimMeanDifference: 'trim-md',
    trimStandardDeviation: 'trim-sd',
    trimTolerance: 'trim-tol',
    trimImage: 'trim',
    textLeading: 'txt-lead',
    textTracking: 'txt-track',
    typesettingEndpoint: '~text',
    watermarkAlignment: 'mark-align',
    watermarkAlpha: 'mark-alpha',
    watermarkBaseURL: 'mark-base',
    watermarkFitMode: 'mark-fit',
    watermarkHeight: 'mark-h',
    watermarkPadding: 'mark-pad',
    watermarkRotation: 'mark-rot',
    watermarkScale: 'mark-sclae',
    watermarkTile: 'mark-tile',
    watermarkWidth: 'mark-w',
    watermarkXPosition: 'mark-x',
    watermarkYPosition: 'mark-y',
    watermarkImageURL: 'mark',
  },
  valueMap: {
    fit: {
      fill: 'scale',
      inside: 'max',
      outside: 'min',
      cover: 'crop',
      contain: 'fill',
      clamp: 'clamp',
      clip: 'clip',
      facearea: 'facearea',
      fillMax: 'fillmax',
    },
    // https://docs.imgix.com/apis/rendering/format/fm
    format: {
      gif: 'gif',
      jp2: 'jp2',
      jpg: 'jpg',
      json: 'json',
      jxr: 'jxr',
      pjpg: 'pjpg',
      mp4: 'mp4',
      png: 'png',
      png8: 'png8',
      png32: 'png32',
      webm: 'webm',
      webp: 'webp',
      blurhash: 'blurhash',
    },
  },
})

interface ImgixOptions {
  baseURL?: string
}

export default defineProvider<ImgixOptions>({
  getImage: (src, { modifiers, baseURL = '/' }) => {
    const operations = operationsGenerator(modifiers)
    return {
      url: joinURL(baseURL, src + (operations ? ('?' + operations) : '')),
    }
  },
})
