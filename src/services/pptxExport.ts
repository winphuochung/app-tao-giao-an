import PptxGenJS from 'pptxgenjs';
import { SlidePowerPointData, SlideItem } from '../types';

export async function exportSlideDeckToPptx(slideData: SlidePowerPointData, lessonTitle: string): Promise<void> {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5 inches (16:9)

  const theme = slideData.themeConfig;
  const cleanHex = (hex: string) => hex.replace('#', '').trim();

  const primaryCol = cleanHex(theme.primaryColor);
  const secondaryCol = cleanHex(theme.secondaryColor);
  const accentCol = cleanHex(theme.accentColor);
  const bgCol = cleanHex(theme.backgroundColor);
  const cardBgCol = cleanHex(theme.cardBg);
  const textCol = cleanHex(theme.textColor);
  const fontHead = theme.fontHeading || 'Montserrat';
  const fontBody = theme.fontBody || 'Inter';

  for (const item of slideData.slides) {
    const slide = pptx.addSlide();
    slide.background = { color: bgCol };

    // Format Speaker Notes with Animation Storyboard embedded
    const animationInstructions = item.animationsAndTransitions
      ? `\n\n[CHỈ DẪN HIỆU ỨNG POWERPOINT]:\n- Chuyển cảnh Slide (Transition): ${item.animationsAndTransitions.slideTransition}\n- Hiệu ứng thành phần (Animations):\n  * ${item.animationsAndTransitions.elementAnimations.join('\n  * ')}`
      : '';
    const fullNotes = `${item.speakerNotes || 'Lời dẫn của giáo viên...'}${animationInstructions}\n\n[GỢI Ý ẢNH MINH HỌA AI PROMPT]:\n${item.aiImagePrompt || 'N/A'}`;
    slide.addNotes(fullNotes);

    // Decorative top header bar
    slide.addShape(pptx.ShapeType.rect, {
      x: 0,
      y: 0,
      w: 13.33,
      h: 0.15,
      fill: { color: primaryCol },
      line: { color: primaryCol }
    });

    if (item.slideType === 'TITLE_SLIDE') {
      // TITLE SLIDE
      // Central Decorative Card
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 1.0,
        y: 1.2,
        w: 11.33,
        h: 5.2,
        rectRadius: 0.2,
        fill: { color: cardBgCol },
        line: { color: primaryCol, width: 2 },
        shadow: { type: 'outer', blur: 8, offset: 3, opacity: 0.15 }
      });

      // Stage Badge
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 4.66,
        y: 1.6,
        w: 4.0,
        h: 0.5,
        rectRadius: 0.25,
        fill: { color: primaryCol }
      });
      slide.addText('CHƯƠNG TRÌNH GDPT 2018', {
        x: 4.66,
        y: 1.6,
        w: 4.0,
        h: 0.5,
        fontSize: 13,
        fontFace: fontHead,
        color: 'FFFFFF',
        bold: true,
        align: 'center',
        valign: 'middle'
      });

      // Main Title
      slide.addText(item.title, {
        x: 1.5,
        y: 2.3,
        w: 10.33,
        h: 1.6,
        fontSize: 32,
        fontFace: fontHead,
        color: primaryCol,
        bold: true,
        align: 'center',
        valign: 'middle'
      });

      // Subtitle
      if (item.subtitle) {
        slide.addText(item.subtitle, {
          x: 1.5,
          y: 4.0,
          w: 10.33,
          h: 0.6,
          fontSize: 16,
          fontFace: fontBody,
          color: secondaryCol,
          align: 'center',
          valign: 'middle',
          bold: true
        });
      }

      // Feature highlights bar
      if (item.bulletPoints && item.bulletPoints.length > 0) {
        const bpText = item.bulletPoints.map((bp) => ({
          text: `• ${bp}   `,
          options: { fontSize: 13, fontFace: fontBody, color: textCol }
        }));
        slide.addText(bpText, {
          x: 2.0,
          y: 4.8,
          w: 9.33,
          h: 0.8,
          align: 'center',
          valign: 'middle'
        });
      }

      // Bottom teacher credit
      slide.addText('Giáo án & Bài giảng điện tử đa phương tiện chuẩn Công văn BGD&ĐT', {
        x: 1.0,
        y: 6.6,
        w: 11.33,
        h: 0.4,
        fontSize: 11,
        fontFace: fontBody,
        color: '94A3B8',
        align: 'center'
      });

    } else if (item.slideType === 'OBJECTIVE') {
      // OBJECTIVE SLIDE - Bento 3-Card Grid
      // Slide Title
      renderSlideHeader(slide, item, fontHead, fontBody, primaryCol, secondaryCol);

      const cards = item.bulletPoints || [];
      const cardWidth = 3.6;
      const cardHeight = 4.2;
      const startX = 0.8;
      const spacing = 0.4;
      const yPos = 2.0;

      cards.slice(0, 3).forEach((bp, idx) => {
        const xPos = startX + idx * (cardWidth + spacing);
        const cardTitle = idx === 0 ? 'Kiến Thức Trọng Tâm' : idx === 1 ? 'Năng Lực Cốt Lõi' : 'Phẩm Chất & Sáng Tạo';
        const cardColor = idx === 0 ? primaryCol : idx === 1 ? accentCol : secondaryCol;

        // Outer Card
        slide.addShape(pptx.ShapeType.roundRect, {
          x: xPos,
          y: yPos,
          w: cardWidth,
          h: cardHeight,
          rectRadius: 0.15,
          fill: { color: cardBgCol },
          line: { color: cardColor, width: 1.5 },
          shadow: { type: 'outer', blur: 6, offset: 2, opacity: 0.12 }
        });

        // Card Header Badge
        slide.addShape(pptx.ShapeType.roundRect, {
          x: xPos + 0.3,
          y: yPos + 0.3,
          w: cardWidth - 0.6,
          h: 0.45,
          rectRadius: 0.1,
          fill: { color: cardColor }
        });
        slide.addText(cardTitle, {
          x: xPos + 0.3,
          y: yPos + 0.3,
          w: cardWidth - 0.6,
          h: 0.45,
          fontSize: 12,
          fontFace: fontHead,
          color: 'FFFFFF',
          bold: true,
          align: 'center',
          valign: 'middle'
        });

        // Content
        slide.addText(bp.replace(/^[🎯📏✍️1️⃣2️⃣3️⃣\s•-]+/, ''), {
          x: xPos + 0.3,
          y: yPos + 0.9,
          w: cardWidth - 0.6,
          h: 3.0,
          fontSize: 14,
          fontFace: fontBody,
          color: textCol,
          valign: 'top',
          lineSpacing: 22
        });
      });

    } else if (item.slideType === 'INTERACTIVE_QUIZ' || item.visualLayout === 'Quiz Layout') {
      // QUIZ SLIDE
      renderSlideHeader(slide, item, fontHead, fontBody, primaryCol, secondaryCol);

      // Question Banner
      const questionText = item.bulletPoints[0] || 'Câu hỏi trắc nghiệm kiến thức:';
      const options = item.bulletPoints.slice(1);

      slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8,
        y: 1.8,
        w: 11.73,
        h: 1.4,
        rectRadius: 0.15,
        fill: { color: cardBgCol },
        line: { color: primaryCol, width: 2 },
        shadow: { type: 'outer', blur: 6, offset: 2, opacity: 0.12 }
      });
      slide.addText(questionText, {
        x: 1.1,
        y: 1.9,
        w: 11.13,
        h: 1.2,
        fontSize: 18,
        fontFace: fontHead,
        color: primaryCol,
        bold: true,
        valign: 'middle'
      });

      // 4 Options Grid (2x2)
      const optW = 5.6;
      const optH = 1.3;
      const optY1 = 3.5;
      const optY2 = 5.1;
      const optX1 = 0.8;
      const optX2 = 6.93;

      const positions = [
        { x: optX1, y: optY1 },
        { x: optX2, y: optY1 },
        { x: optX1, y: optY2 },
        { x: optX2, y: optY2 }
      ];

      options.slice(0, 4).forEach((opt, idx) => {
        const isCorrect = opt.includes('Đáp án đúng') || opt.includes('chuẩn xác') || idx === 2;
        const pos = positions[idx];
        const optColor = isCorrect ? '10B981' : secondaryCol;

        slide.addShape(pptx.ShapeType.roundRect, {
          x: pos.x,
          y: pos.y,
          w: optW,
          h: optH,
          rectRadius: 0.12,
          fill: { color: cardBgCol },
          line: { color: optColor, width: isCorrect ? 2 : 1 },
          shadow: { type: 'outer', blur: 4, offset: 2, opacity: 0.1 }
        });

        slide.addText(opt, {
          x: pos.x + 0.3,
          y: pos.y + 0.15,
          w: optW - 0.6,
          h: optH - 0.3,
          fontSize: 15,
          fontFace: fontBody,
          color: isCorrect ? '047857' : textCol,
          bold: isCorrect,
          valign: 'middle'
        });
      });

    } else {
      // 2-COLUMN SPLIT OR STANDARD ACTIVITY SLIDE
      renderSlideHeader(slide, item, fontHead, fontBody, primaryCol, secondaryCol);

      const colWidth = 5.65;
      const colHeight = 4.7;
      const leftX = 0.8;
      const rightX = 6.88;
      const yPos = 1.9;

      // Left Card: Main Points / Interactive Triggers
      slide.addShape(pptx.ShapeType.roundRect, {
        x: leftX,
        y: yPos,
        w: colWidth,
        h: colHeight,
        rectRadius: 0.15,
        fill: { color: cardBgCol },
        line: { color: primaryCol, width: 1.5 },
        shadow: { type: 'outer', blur: 6, offset: 2, opacity: 0.12 }
      });

      // Left Card Title Badge
      slide.addShape(pptx.ShapeType.roundRect, {
        x: leftX + 0.3,
        y: yPos + 0.25,
        w: colWidth - 0.6,
        h: 0.45,
        rectRadius: 0.1,
        fill: { color: primaryCol }
      });
      slide.addText('HOẠT ĐỘNG TRỌNG TÂM', {
        x: leftX + 0.3,
        y: yPos + 0.25,
        w: colWidth - 0.6,
        h: 0.45,
        fontSize: 12,
        fontFace: fontHead,
        color: 'FFFFFF',
        bold: true,
        align: 'center',
        valign: 'middle'
      });

      // Left Bullet Points
      const bpRuns = item.bulletPoints.map((bp) => ({
        text: `• ${bp}\n\n`,
        options: { fontSize: 14, fontFace: fontBody, color: textCol }
      }));

      slide.addText(bpRuns, {
        x: leftX + 0.35,
        y: yPos + 0.85,
        w: colWidth - 0.7,
        h: colHeight - 1.0,
        valign: 'top',
        lineSpacing: 22
      });

      // Right Card: Board Summary / Product / Visual Box
      slide.addShape(pptx.ShapeType.roundRect, {
        x: rightX,
        y: yPos,
        w: colWidth,
        h: colHeight,
        rectRadius: 0.15,
        fill: { color: cardBgCol },
        line: { color: accentCol, width: 1.5 },
        shadow: { type: 'outer', blur: 6, offset: 2, opacity: 0.12 }
      });

      // Right Card Title Badge
      slide.addShape(pptx.ShapeType.roundRect, {
        x: rightX + 0.3,
        y: yPos + 0.25,
        w: colWidth - 0.6,
        h: 0.45,
        rectRadius: 0.1,
        fill: { color: accentCol }
      });
      slide.addText('GHI BẢNG & SẢN PHẨM CỐT LÕI', {
        x: rightX + 0.3,
        y: yPos + 0.25,
        w: colWidth - 0.6,
        h: 0.45,
        fontSize: 12,
        fontFace: fontHead,
        color: 'FFFFFF',
        bold: true,
        align: 'center',
        valign: 'middle'
      });

      // Board content text
      const boardText = item.boardContent || 'Ghi nhớ trọng tâm bài học và hoàn thành các nhiệm vụ thực hành.';
      slide.addText(boardText, {
        x: rightX + 0.35,
        y: yPos + 0.85,
        w: colWidth - 0.7,
        h: 2.2,
        fontSize: 13,
        fontFace: fontBody,
        color: textCol,
        valign: 'top'
      });

      // AI Image / Visual Suggestion Note Box
      slide.addShape(pptx.ShapeType.roundRect, {
        x: rightX + 0.3,
        y: yPos + 3.1,
        w: colWidth - 0.6,
        h: 1.35,
        rectRadius: 0.1,
        fill: { color: 'F1F5F9' },
        line: { color: 'CBD5E1', width: 1 }
      });
      slide.addText(`💡 Gợi ý trực quan:\n${item.aiImagePrompt?.slice(0, 110) || 'Hình ảnh minh họa sư phạm trực quan'}...`, {
        x: rightX + 0.4,
        y: yPos + 3.15,
        w: colWidth - 0.8,
        h: 1.25,
        fontSize: 10,
        fontFace: fontBody,
        color: '475569',
        italic: true,
        valign: 'middle'
      });
    }

    // Bottom Footer on Every Content Slide
    slide.addText(`Tiết học: ${lessonTitle}  |  Slide ${item.slideNumber}`, {
      x: 0.8,
      y: 6.9,
      w: 8.0,
      h: 0.3,
      fontSize: 10,
      fontFace: fontBody,
      color: '94A3B8'
    });

    slide.addText('Hệ thống Giáo án & Slide GDPT 2018', {
      x: 8.8,
      y: 6.9,
      w: 3.73,
      h: 0.3,
      fontSize: 10,
      fontFace: fontBody,
      color: '94A3B8',
      align: 'right'
    });
  }

  const cleanFileName = `Slide_BaiGiang_${lessonTitle.replace(/[^a-zA-Z0-9_\u00C0-\u024F\u1E00-\u1EFF]/g, '_')}.pptx`;
  await pptx.writeFile({ fileName: cleanFileName });
}

function renderSlideHeader(
  slide: any,
  item: SlideItem,
  fontHead: string,
  fontBody: string,
  primaryCol: string,
  secondaryCol: string
) {
  // Top Stage Badge
  if (item.stageBadge) {
    slide.addShape('roundRect', {
      x: 0.8,
      y: 0.35,
      w: 2.2,
      h: 0.35,
      rectRadius: 0.15,
      fill: { color: primaryCol }
    });
    slide.addText(item.stageBadge.toUpperCase(), {
      x: 0.8,
      y: 0.35,
      w: 2.2,
      h: 0.35,
      fontSize: 10,
      fontFace: fontHead,
      color: 'FFFFFF',
      bold: true,
      align: 'center',
      valign: 'middle'
    });
  }

  // Slide Title
  slide.addText(item.title, {
    x: 0.8,
    y: 0.75,
    w: 11.73,
    h: 0.6,
    fontSize: 22,
    fontFace: fontHead,
    color: primaryCol,
    bold: true,
    valign: 'middle'
  });

  // Subtitle
  if (item.subtitle) {
    slide.addText(item.subtitle, {
      x: 0.8,
      y: 1.35,
      w: 11.73,
      h: 0.35,
      fontSize: 13,
      fontFace: fontBody,
      color: secondaryCol,
      bold: true,
      valign: 'top'
    });
  }
}
