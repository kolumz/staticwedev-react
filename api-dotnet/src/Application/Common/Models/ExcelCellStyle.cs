using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Syncfusion.XlsIO;

namespace Application.Common.Models
{
    public class ExcelCellStyle
    {
        public Syncfusion.Drawing.Color? BackgroundColor { get; set; }
        public ExcelKnownColors? FontColor { get; set; }
        public ExcelVAlign? VerticalAlignment { get; set; }
        public ExcelHAlign? HorizontalAlignment { get; set; }
        public ExcelKnownColors? BorderColor { get; set; }
        public ExcelLineStyle? BorderLineStyle { get; set; }
        public bool WrapText { get; set; } = true;
        public bool Locked { get; set; } = false;
        public double? CellWidth { get; set; }
        public double? CellHeight { get; set; }

        public ExcelCellStyle() {}

        public IStyle GetCellStyle(string StyleName, IWorkbook workbook)
        {
            IStyle style = workbook.Styles.Add(StyleName);

            if(BackgroundColor != null)
                style.Color = (Syncfusion.Drawing.Color)BackgroundColor;
            if(FontColor != null)
                style.Font.Color = (ExcelKnownColors)FontColor;
            if (VerticalAlignment != null)
                style.VerticalAlignment = (ExcelVAlign)VerticalAlignment;
            if(HorizontalAlignment != null)
                style.HorizontalAlignment = (ExcelHAlign)HorizontalAlignment;
            if(BorderColor != null)
            {
                style.Borders[ExcelBordersIndex.EdgeTop].Color = (ExcelKnownColors)BorderColor;
                style.Borders[ExcelBordersIndex.EdgeBottom].Color = (ExcelKnownColors)BorderColor;
                style.Borders[ExcelBordersIndex.EdgeLeft].Color = (ExcelKnownColors)BorderColor;
                style.Borders[ExcelBordersIndex.EdgeRight].Color = (ExcelKnownColors)BorderColor;
            }
            if(BorderLineStyle != null)
            {
                style.Borders[ExcelBordersIndex.EdgeTop].LineStyle = (ExcelLineStyle)BorderLineStyle;
                style.Borders[ExcelBordersIndex.EdgeBottom].LineStyle = (ExcelLineStyle)BorderLineStyle;
                style.Borders[ExcelBordersIndex.EdgeLeft].LineStyle = (ExcelLineStyle)BorderLineStyle;
                style.Borders[ExcelBordersIndex.EdgeRight].LineStyle = (ExcelLineStyle)BorderLineStyle;
            }
            style.WrapText = WrapText;
            style.Locked = Locked;
            return style;
        }

    }
}
