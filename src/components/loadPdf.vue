<template>
  <canvas
      ref="canvasRef"
      :width="width"
      :height="height"
  >
  </canvas>
</template>
<script>
  import pdfjs from 'pdfjs-dist';
  import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
  export default {
    props:['dataUrl','propsWidth','propsHeight'],
    data(){
      return{
        width:this.propsWidth?this.propsWidth:window.innerWidth,
        height:this.propsWidth?this.propsHeight:window.innerHeight
      }
    },
    mounted(){
      this.fecthPdf(this.dataUrl)
    },
    methods:{
      async fecthPdf(src){
        pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
        const loadingTask = pdfjs.getDocument('./helloword.pdf');
        const pdf = await loadingTask.promise;
        const firstPageNumber = 1;

        const page = await pdf.getPage(firstPageNumber);

        const scale = 1.5;
        const viewport = page.getViewport({scale: scale});
        // Prepare canvas using PDF page dimensions
        const canvas =this.$refs["canvasRef"];

        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        const renderTask = page.render(renderContext);

        await renderTask.promise;
      }
    }
  }
</script>
