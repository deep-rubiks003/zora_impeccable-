const fs = require('fs');

const filePath = 'c:/Users/deept/Downloads/zora-product-os/Projects/efficiency-agent-mockup/outputs/reco-card.html';
let content = fs.readFileSync(filePath, 'utf8');

// Define the literal functions
const injectModalsAndStyles = `function injectModalsAndStyles() {
  // Styles injection
  const style = document.createElement('style');
  style.textContent = \`
    /* Chat Slideover */
    .chat-slideover {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 380px;
      max-width: 100%;
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border-left: 1px solid rgba(26, 26, 46, 0.08);
      box-shadow: -4px 0 24px rgba(26, 26, 46, 0.08);
      z-index: 120;
      display: flex;
      flex-direction: column;
      transform: translateX(100%);
      transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .chat-slideover.show {
      transform: translateX(0);
    }
    
    .chat-header {
      padding: 16px 20px;
      border-bottom: 1px solid rgba(26, 26, 46, 0.06);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .chat-client-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .chat-client-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--accent);
      color: #fff;
      font-weight: 600;
      font-size: 13px;
      display: grid;
      place-items: center;
    }
    .chat-client-name {
      font-family: var(--font-geist);
      font-size: 14.5px;
      font-weight: 600;
      color: var(--ink);
    }
    .chat-client-status {
      font-family: var(--font-dm-sans);
      font-size: 11px;
      color: var(--ok);
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .chat-client-status::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--ok);
      display: inline-block;
    }
    
    .chat-messages {
      flex-grow: 1;
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .chat-bubble {
      max-width: 80%;
      padding: 10px 14px;
      border-radius: 12px;
      font-family: var(--font-dm-sans);
      font-size: 13px;
      line-height: 1.45;
    }
    .chat-bubble.coach {
      background: var(--accent-soft);
      color: var(--accent-deep);
      border: 1px solid rgba(122, 84, 135, 0.12);
      align-self: flex-end;
      border-bottom-right-radius: 2px;
    }
    .chat-bubble.client {
      background: var(--paper-3);
      color: var(--ink);
      border: 1px solid var(--line-soft);
      align-self: flex-start;
      border-bottom-left-radius: 2px;
    }
    .chat-bubble.system-zora {
      background: rgba(26, 26, 46, 0.03);
      color: var(--ink-3);
      border: 1px dashed var(--line);
      align-self: center;
      font-style: italic;
      font-size: 12px;
      text-align: center;
      max-width: 90%;
    }
    
    .chat-input-area {
      padding: 16px 20px;
      border-top: 1px solid rgba(26, 26, 46, 0.06);
      display: flex;
      flex-direction: column;
      gap: 8px;
      background: #ffffff;
    }
    .chat-input-row {
      display: flex;
      gap: 8px;
    }
    .chat-input {
      flex-grow: 1;
      border: 1px solid rgba(26, 26, 46, 0.1);
      border-radius: 8px;
      padding: 8px 12px;
      font-family: var(--font-dm-sans);
      font-size: 13px;
      outline: none;
      resize: none;
      height: 38px;
      box-sizing: border-box;
    }
    .chat-input:focus {
      border-color: var(--accent);
    }
    .chat-send-btn {
      background: var(--ink);
      color: #fff;
      border: 0;
      border-radius: 8px;
      padding: 0 14px;
      cursor: pointer;
      font-family: var(--font-geist);
      font-size: 12.5px;
      font-weight: 600;
    }
    .chat-send-btn:hover {
      background: var(--accent-deep);
    }
    .chat-smart-reply {
      font-family: var(--font-dm-sans);
      font-size: 11.5px;
      font-weight: 500;
      color: var(--accent-deep);
      background: rgba(122, 84, 135, 0.06);
      border: 1px solid rgba(122, 84, 135, 0.16);
      border-radius: 6px;
      padding: 4px 8px;
      cursor: pointer;
      align-self: flex-start;
      transition: background 0.15s;
    }
    .chat-smart-reply:hover {
      background: rgba(122, 84, 135, 0.12);
    }
    
    /* Calendar & Call picker styles */
    .calendar-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 6px;
      margin-top: 12px;
    }
    .calendar-day-header {
      font-size: 9px;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--ink-4);
      text-align: center;
    }
    .calendar-day-btn {
      aspect-ratio: 1;
      border-radius: 6px;
      border: 1px solid var(--line);
      background: transparent;
      font-family: var(--font-geist);
      font-size: 11px;
      font-weight: 500;
      color: var(--ink-2);
      cursor: pointer;
      display: grid;
      place-items: center;
      transition: all 0.15s ease;
    }
    .calendar-day-btn:hover:not(.disabled) {
      border-color: var(--accent);
      background: var(--accent-soft);
    }
    .calendar-day-btn.selected {
      background: var(--accent);
      color: #ffffff;
      border-color: var(--accent);
      font-weight: 600;
    }
    .calendar-day-btn.disabled {
      opacity: 0.3;
      pointer-events: none;
    }
    .time-slots-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      margin-top: 16px;
    }
    .time-slot-btn {
      padding: 8px 10px;
      border: 1px solid var(--line);
      border-radius: 6px;
      background: transparent;
      font-family: var(--font-dm-sans);
      font-size: 12px;
      font-weight: 500;
      color: var(--ink-2);
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
    }
    .time-slot-btn:hover {
      border-color: var(--accent);
      background: var(--accent-soft);
    }
    .time-slot-btn.selected {
      background: var(--accent);
      color: #ffffff;
      border-color: var(--accent);
      font-weight: 600;
    }
    
    /* Tactile active state scaling */
    .pm-btn-primary:active, .btn-primary:active, .btn-secondary:active, .action-rail-btn:active {
      transform: scale(0.97);
    }
    .pm-btn-ghost:active, .btn-ghost:active {
      transform: scale(0.985);
    }
  \`;
  document.head.appendChild(style);

  // Note Modal HTML
  const noteModalHtml = \`
    <div class="prompt-overlay" id="note-modal-overlay" style="opacity:0; pointer-events:none;">
      <div class="prompt-stack">
        <div class="pm-modal">
          <div class="pm-head">
            <h2>Log Coach Note <em id="note-client-name">for client</em></h2>
            <p>Add a note to timeline logs. Only coaches and Zora see this note.</p>
            <button class="pm-close" id="note-modal-close" type="button" aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div class="pm-body" style="display:block;">
            <div style="margin: 6px 0 18px;">
              <textarea class="pm-prompt" id="note-textarea" rows="4" placeholder="Enter private note details..." style="padding:14px 16px 14px 14px; width:100%; border:1px solid rgba(26,26,46,0.1); border-radius:8px;"></textarea>
            </div>
          </div>
          <div class="pm-foot">
            <div class="pm-foot-meta">Saved notes are logged in history.</div>
            <div class="pm-foot-actions">
              <button class="pm-btn-ghost" id="note-modal-cancel" type="button">Cancel</button>
              <button class="pm-btn-primary" id="note-modal-save" type="button">Save Note</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`;
  document.body.insertAdjacentHTML('beforeend', noteModalHtml);

  // Call Modal HTML
  const callModalHtml = \`
    <div class="prompt-overlay" id="call-modal-overlay" style="opacity:0; pointer-events:none;">
      <div class="prompt-stack">
        <div class="pm-modal">
          <div class="pm-head">
            <h2>Schedule Call <em id="call-client-name">with client</em></h2>
            <p>Select a slot for a 15-minute alignment check-in. Zora will send the invite.</p>
            <button class="pm-close" id="call-modal-close" type="button" aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div class="pm-body" style="display:block; padding-bottom: 20px;">
            <div style="font-size:11px; font-weight:600; color:var(--ink-4); text-transform:uppercase; margin-bottom:6px;">Select Date</div>
            <div class="calendar-grid" id="call-calendar-grid"></div>
            
            <div style="font-size:11px; font-weight:600; color:var(--ink-4); text-transform:uppercase; margin-top:16px; margin-bottom:6px;">Select Time (EST)</div>
            <div class="time-slots-grid">
              <button class="time-slot-btn selected" type="button">09:00 AM</button>
              <button class="time-slot-btn" type="button">10:30 AM</button>
              <button class="time-slot-btn" type="button">01:00 PM</button>
              <button class="time-slot-btn" type="button">03:30 PM</button>
              <button class="time-slot-btn" type="button">04:15 PM</button>
              <button class="time-slot-btn" type="button">05:00 PM</button>
            </div>
          </div>
          <div class="pm-foot">
            <div class="pm-foot-meta">Calendar invite will be sent automatically.</div>
            <div class="pm-foot-actions">
              <button class="pm-btn-ghost" id="call-modal-cancel" type="button">Cancel</button>
              <button class="pm-btn-primary" id="call-modal-schedule" type="button">Schedule Call</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`;
  document.body.insertAdjacentHTML('beforeend', callModalHtml);

  // Apply Plan Fix Modal HTML
  const fixModalHtml = \`
    <div class="prompt-overlay" id="fix-modal-overlay" style="opacity:0; pointer-events:none;">
      <div class="prompt-stack">
        <div class="pm-modal">
          <div class="pm-head">
            <h2>Apply Suggested Plan Fix</h2>
            <p>Confirm the proposed adjustments drafted by Zora.</p>
            <button class="pm-close" id="fix-modal-close" type="button" aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div class="pm-body" style="display:block;">
            <div class="pm-result-eyebrow">proposed training diff</div>
            <div class="pm-diff" id="fix-modal-diff-list" style="margin-bottom:16px;"></div>
          </div>
          <div class="pm-foot">
            <div class="pm-foot-meta">This will update the active week schedule draft.</div>
            <div class="pm-foot-actions">
              <button class="pm-btn-ghost" id="fix-modal-cancel" type="button">Cancel</button>
              <button class="pm-btn-primary" id="fix-modal-confirm" type="button">Confirm &amp; Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`;
  document.body.insertAdjacentHTML('beforeend', fixModalHtml);

  // Chat Slideover HTML
  const chatSlideoverHtml = \`
    <div class="chat-slideover" id="chat-slideover">
      <div class="chat-header">
        <div class="chat-client-info">
          <div class="chat-client-avatar" id="chat-avatar">SK</div>
          <div>
            <div class="chat-client-name" id="chat-name">Sarah K.</div>
            <div class="chat-client-status">Active now</div>
          </div>
        </div>
        <button class="pm-close" id="chat-close" type="button" aria-label="Close" style="position:static; width:28px; height:28px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="chat-messages" id="chat-messages-container"></div>
      <div class="chat-input-area">
        <button class="chat-smart-reply" id="chat-smart-reply-btn" type="button">Smart Reply: Apply deload walk</button>
        <div class="chat-input-row">
          <textarea class="chat-input" id="chat-input-textarea" placeholder="Type message to client..."></textarea>
          <button class="chat-send-btn" id="chat-send-btn">Send</button>
        </div>
      </div>
    </div>
  \`;
  document.body.insertAdjacentHTML('beforeend', chatSlideoverHtml);
}`;

const drawTimeline = `function drawTimeline(svgId, timelineData) {
  const svg = document.getElementById(svgId);
  if (!svg) return;
  svg.innerHTML = '';
  
  const width = 720;
  const height = 180;
  const paddingLeft = 110;
  const paddingRight = 20;
  const timelineWidth = width - paddingLeft - paddingRight;
  const step = timelineWidth / 29; // 30 points
  
  // Rows: App Opens, Messages, Check-ins, Wearables
  const rowLabels = ["App Opens", "Messages", "Check-ins", "Wearables"];
  const rowY = [35, 75, 115, 155];
  const colors = ["#9b59b6", "#3498db", "#2ecc71", "#95a5a6"];
  
  // Draw row labels
  rowLabels.forEach((lbl, idx) => {
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", "10");
    text.setAttribute("y", rowY[idx] + 4);
    text.setAttribute("class", "timeline-row-lbl");
    text.textContent = lbl;
    svg.appendChild(text);
    
    // Draw row horizontal grid line
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", paddingLeft);
    line.setAttribute("y1", rowY[idx]);
    line.setAttribute("x2", width - paddingRight);
    line.setAttribute("y2", rowY[idx]);
    line.setAttribute("class", "timeline-gridline");
    svg.appendChild(line);
  });
  
  // Draw drop-off period background wash (last 1/3, e.g. day 20 to 29)
  const dropOffStartDay = 20;
  const washX = paddingLeft + dropOffStartDay * step;
  const washW = (29 - dropOffStartDay) * step + 10;
  
  const washRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  washRect.setAttribute("x", washX);
  washRect.setAttribute("y", "15");
  washRect.setAttribute("width", washW);
  washRect.setAttribute("height", height - 30);
  washRect.setAttribute("fill", "rgba(231, 76, 60, 0.05)");
  washRect.setAttribute("stroke", "rgba(231, 76, 60, 0.15)");
  washRect.setAttribute("stroke-dasharray", "4 4");
  washRect.setAttribute("rx", "4");
  svg.appendChild(washRect);

  const washText = document.createElementNS("http://www.w3.org/2000/svg", "text");
  washText.setAttribute("x", washX + 8);
  washText.setAttribute("y", "26");
  washText.setAttribute("fill", "var(--bad)");
  washText.setAttribute("font-family", "var(--font-geist)");
  washText.setAttribute("font-size", "9px");
  washText.setAttribute("font-weight", "600");
  washText.textContent = "DROP-OFF PERIOD";
  svg.appendChild(washText);

  // Draw day markers / lines
  for (let day = 0; day < 30; day++) {
    const cx = paddingLeft + day * step;
    
    // Label for first and last days, and today
    if (day === 0 || day === 14 || day === 29) {
      const dayLbl = document.createElementNS("http://www.w3.org/2000/svg", "text");
      dayLbl.setAttribute("x", cx);
      dayLbl.setAttribute("y", "170");
      dayLbl.setAttribute("text-anchor", "middle");
      dayLbl.setAttribute("class", "timeline-date-text");
      dayLbl.textContent = day === 0 ? "D-30" : (day === 14 ? "D-15" : "Today");
      svg.appendChild(dayLbl);
      
      const vLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
      vLine.setAttribute("x1", cx);
      vLine.setAttribute("y1", "25");
      vLine.setAttribute("x2", cx);
      vLine.setAttribute("y2", "158");
      vLine.setAttribute("stroke", "var(--line-soft)");
      vLine.setAttribute("stroke-dasharray", "2 2");
      svg.appendChild(vLine);
    }
    
    // Plot dots
    // App Opens (Row 0)
    const appVal = timelineData.appOpens[day];
    if (appVal > 0) {
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", cx);
      dot.setAttribute("cy", rowY[0]);
      dot.setAttribute("r", 3 + Math.min(appVal, 3));
      dot.setAttribute("fill", colors[0]);
      dot.setAttribute("class", "timeline-dot");
      
      const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
      title.textContent = "Day " + (day + 1) + ": " + appVal + " App Opens";
      dot.appendChild(title);
      svg.appendChild(dot);
    }
    
    // Messages (Row 1)
    const msgVal = timelineData.messages[day];
    if (msgVal > 0) {
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", cx);
      dot.setAttribute("cy", rowY[1]);
      dot.setAttribute("r", 4);
      dot.setAttribute("fill", colors[1]);
      dot.setAttribute("class", "timeline-dot");
      
      const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
      title.textContent = "Day " + (day + 1) + ": " + msgVal + " Messages";
      dot.appendChild(title);
      svg.appendChild(dot);
    }
    
    // Check-ins (Row 2)
    const ciVal = timelineData.checkins[day];
    if (ciVal === 1) { // completed
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", cx);
      dot.setAttribute("cy", rowY[2]);
      dot.setAttribute("r", 4.5);
      dot.setAttribute("fill", colors[2]);
      dot.setAttribute("class", "timeline-dot");
      
      const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
      title.textContent = "Day " + (day + 1) + ": Check-in Completed";
      dot.appendChild(title);
      svg.appendChild(dot);
    } else if (ciVal === 0) { // skipped
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", cx);
      dot.setAttribute("cy", rowY[2]);
      dot.setAttribute("r", 4.5);
      dot.setAttribute("fill", "#e74c3c"); // red
      dot.setAttribute("class", "timeline-dot");
      
      const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
      title.textContent = "Day " + (day + 1) + ": Check-in Skipped";
      dot.appendChild(title);
      svg.appendChild(dot);
    }
    
    // Wearables (Row 3)
    const wearVal = timelineData.wearables[day];
    if (wearVal > 0) {
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", cx);
      dot.setAttribute("cy", rowY[3]);
      dot.setAttribute("r", 3.5);
      dot.setAttribute("fill", wearVal === 1 ? colors[3] : "#2ecc71");
      dot.setAttribute("class", "timeline-dot");
      
      const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
      title.textContent = "Day " + (day + 1) + ": Wearables Synced";
      dot.appendChild(title);
      svg.appendChild(dot);
    }
  }
}`;

const drawSparkline = `function drawSparkline(svgId, dataPoints, color) {
  const svg = document.getElementById(svgId);
  if (!svg) return;
  svg.innerHTML = '';
  
  const width = 180;
  const height = 50;
  const pad = 6;
  
  if (!dataPoints || dataPoints.length === 0) return;
  
  const min = Math.min(...dataPoints);
  const max = Math.max(...dataPoints);
  const range = max - min || 1;
  
  const points = dataPoints.map((val, idx) => {
    const x = pad + (idx * (width - 2 * pad)) / (dataPoints.length - 1);
    const y = height - pad - ((val - min) * (height - 2 * pad)) / range;
    return { x, y, val };
  });
  
  // Construct path
  let d = "M " + points[0].x + " " + points[0].y;
  for (let i = 1; i < points.length; i++) {
    d += " L " + points[i].x + " " + points[i].y;
  }
  
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);
  path.setAttribute("class", "sparkline-path");
  path.setAttribute("stroke", color);
  svg.appendChild(path);
  
  // Draw gradient area underneath
  let dArea = d + " L " + points[points.length - 1].x + " " + height + " L " + points[0].x + " " + height + " Z";
  const area = document.createElementNS("http://www.w3.org/2000/svg", "path");
  area.setAttribute("d", dArea);
  area.setAttribute("fill", color.includes('accent') ? 'rgba(122, 84, 135, 0.08)' : 'rgba(46, 204, 113, 0.08)');
  svg.appendChild(area);
  
  // Draw dots on hover, and highlight the last point
  points.forEach((pt, idx) => {
    const isLast = idx === points.length - 1;
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", pt.x);
    dot.setAttribute("cy", pt.y);
    dot.setAttribute("r", isLast ? 4 : 2);
    dot.setAttribute("fill", isLast ? color : "transparent");
    dot.setAttribute("stroke", isLast ? "#ffffff" : "transparent");
    dot.setAttribute("stroke-width", isLast ? "1.5" : "0");
    
    // Add title tooltip
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = "Value: " + pt.val;
    dot.appendChild(title);
    
    svg.appendChild(dot);
  });
}`;

const drawSparkbar = `function drawSparkbar(svgId, dataPoints, color) {
  const svg = document.getElementById(svgId);
  if (!svg) return;
  svg.innerHTML = '';
  
  const width = 180;
  const height = 50;
  const pad = 4;
  const barCount = dataPoints.length;
  const barWidth = (width - (barCount - 1) * pad) / barCount;
  
  const max = Math.max(...dataPoints, 100);
  
  dataPoints.forEach((val, idx) => {
    const barHeight = (val / max) * (height - 8);
    const x = idx * (barWidth + pad);
    const y = height - barHeight - 4;
    
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", barWidth);
    rect.setAttribute("height", barHeight);
    rect.setAttribute("rx", "2");
    rect.setAttribute("fill", color);
    rect.setAttribute("class", "sparkbar-rect");
    
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = "Week " + (idx + 1) + ": " + val + "% completion";
    rect.appendChild(title);
    
    svg.appendChild(rect);
  });
}`;

const drawFatigueChart = `function drawFatigueChart(svgId, fatigueData) {
  const svg = document.getElementById(svgId);
  if (!svg) return;
  svg.innerHTML = '';
  
  const width = 280;
  const height = 130;
  const paddingLeft = 30;
  const paddingRight = 10;
  const paddingTop = 15;
  const paddingBottom = 20;
  
  const chartW = width - paddingLeft - paddingRight;
  const chartH = height - paddingTop - paddingBottom;
  
  const vol = fatigueData.volume; // load: e.g. 50 to 100
  const rec = fatigueData.recovery; // recovery score: 0 to 100
  
  const len = vol.length;
  const step = chartW / (len - 1);
  
  // Calculate min/max for volume to scale Y axis 1
  const minVol = Math.min(...vol) - 5;
  const maxVol = Math.max(...vol) + 5;
  const volRange = maxVol - minVol || 1;
  
  // Recovery is always 0-100 on Y axis 2
  const minRec = 0;
  const maxRec = 100;
  const recRange = 100;
  
  const volPoints = vol.map((v, idx) => {
    const x = paddingLeft + idx * step;
    const y = paddingTop + chartH - ((v - minVol) * chartH) / volRange;
    return { x, y, val: v };
  });
  
  const recPoints = rec.map((r, idx) => {
    const x = paddingLeft + idx * step;
    const y = paddingTop + chartH - ((r - minRec) * chartH) / recRange;
    return { x, y, val: r };
  });
  
  // Draw gridlines
  for (let i = 0; i <= 3; i++) {
    const yVal = paddingTop + (i * chartH) / 3;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", paddingLeft);
    line.setAttribute("y1", yVal);
    line.setAttribute("x2", width - paddingRight);
    line.setAttribute("y2", yVal);
    line.setAttribute("stroke", "var(--line-soft)");
    line.setAttribute("stroke-dasharray", "2 2");
    svg.appendChild(line);
  }
  
  // Draw volume path (purple)
  let volD = "M " + volPoints[0].x + " " + volPoints[0].y;
  for (let i = 1; i < len; i++) {
    volD += " L " + volPoints[i].x + " " + volPoints[i].y;
  }
  const volPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  volPath.setAttribute("d", volD);
  volPath.setAttribute("fill", "none");
  volPath.setAttribute("stroke", "var(--accent)");
  volPath.setAttribute("stroke-width", "2");
  volPath.setAttribute("stroke-linecap", "round");
  svg.appendChild(volPath);
  
  // Draw recovery path (orange)
  let recD = "M " + recPoints[0].x + " " + recPoints[0].y;
  for (let i = 1; i < len; i++) {
    recD += " L " + recPoints[i].x + " " + recPoints[i].y;
  }
  const recPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  recPath.setAttribute("d", recD);
  recPath.setAttribute("fill", "none");
  recPath.setAttribute("stroke", "#e67e22");
  recPath.setAttribute("stroke-width", "2");
  recPath.setAttribute("stroke-linecap", "round");
  svg.appendChild(recPath);
  
  // Draw data point dots & tooltips
  volPoints.forEach((pt, idx) => {
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", pt.x);
    dot.setAttribute("cy", pt.y);
    dot.setAttribute("r", 3.5);
    dot.setAttribute("fill", "var(--accent)");
    dot.setAttribute("stroke", "#ffffff");
    dot.setAttribute("stroke-width", "1");
    
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = "Day " + (idx + 1) + " Volume: " + pt.val + " TSS";
    dot.appendChild(title);
    svg.appendChild(dot);
  });
  
  recPoints.forEach((pt, idx) => {
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", pt.x);
    dot.setAttribute("cy", pt.y);
    dot.setAttribute("r", 3.5);
    dot.setAttribute("fill", "#e67e22");
    dot.setAttribute("stroke", "#ffffff");
    dot.setAttribute("stroke-width", "1");
    
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = "Day " + (idx + 1) + " Recovery: " + pt.val + "%";
    dot.appendChild(title);
    svg.appendChild(dot);
  });
  
  // X axis labels
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  days.forEach((day, idx) => {
    const x = paddingLeft + idx * step;
    const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
    txt.setAttribute("x", x);
    txt.setAttribute("y", height - 4);
    txt.setAttribute("text-anchor", "middle");
    txt.setAttribute("font-family", "var(--font-geist)");
    txt.setAttribute("font-size", "9px");
    txt.setAttribute("fill", "var(--ink-4)");
    txt.textContent = day;
    svg.appendChild(txt);
  });
}`;

const renderRiskCard = `function renderRiskCard(client) {
  const container = document.getElementById('risk-hero-container');
  if (!container) return;

  const isHealthy = !client.isAtRisk;
  
  if (isHealthy) {
    // Green border card
    container.innerHTML = ' \
      <div class="risk-hero-card healthy"> \
        <div class="risk-hero-top"> \
          <div> \
            <h2 class="risk-headline">' + client.name + '\\\'s engagement is highly healthy</h2> \
          </div> \
          <div class="risk-value-group"> \
            <div class="risk-value-num healthy-val">' + client.churnRisk + '%</div> \
            <div class="risk-value-lbl">churn risk</div> \
          </div> \
        </div> \
         \
        <div class="reasoning-chips"> \
          ' + client.reasoningChips.map(function(chip) { return '<div class="reasoning-chip"><span style="color: var(--ok);">●</span> ' + chip + '</div>'; }).join('') + ' \
        </div> \
         \
        <div class="intervention-block healthy-block"> \
          <div class="intervention-lbl healthy-lbl">AI-suggested milestone nudge</div> \
          <textarea class="intervention-textarea healthy-textarea" id="intervention-msg">' + client.draftMsg + '</textarea> \
        </div> \
         \
        <div style="display: flex; gap: 12px; align-items: center;"> \
          <button class="btn-primary" id="btn-send-intervention" style="background: var(--ok); border-color: var(--ok);"> \
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:6px; vertical-align:middle; display:inline-block;"> \
              <line x1="22" y1="2" x2="11" y2="13"></line> \
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon> \
            </svg> \
            Send milestone message \
          </button> \
          <button class="btn-ghost" id="btn-why-collapsible-trigger" style="font-size: 12.5px; font-weight: 600; color: var(--ink-3); border:0; background:transparent; cursor:pointer;"> \
            Why this suggestion? \
          </button> \
        </div> \
         \
        <div class="accordion-content" id="why-collapsible-content"> \
          <div class="accordion-inner"> \
            ' + client.whyContent + ' \
          </div> \
        </div> \
      </div> \
    ';
  } else {
    // Red border card
    container.innerHTML = ' \
      <div class="risk-hero-card"> \
        <div class="risk-hero-top"> \
          <div> \
            <h2 class="risk-headline">' + (client.riskText || client.name + ' may disengage in the next 14 days') + '</h2> \
          </div> \
          <div class="risk-value-group"> \
            <div class="risk-value-num">' + client.churnRisk + '%</div> \
            <div class="risk-value-lbl">churn risk</div> \
          </div> \
        </div> \
         \
        <div class="reasoning-chips"> \
          ' + client.reasoningChips.map(function(chip) { return '<div class="reasoning-chip"><span style="color: var(--bad);">●</span> ' + chip + '</div>'; }).join('') + ' \
        </div> \
         \
        <div class="intervention-block"> \
          <div class="intervention-lbl">AI-suggested intervention</div> \
          <textarea class="intervention-textarea" id="intervention-msg">' + client.draftMsg + '</textarea> \
           \
          <div class="suggestion-rows"> \
            ' + client.suggestions.map(function(s) { return '<div class="suggestion-row"><span>' + s.icon + '</span><span>' + s.text + '</span></div>'; }).join('') + ' \
          </div> \
           \
          <div class="predicted-impact-text"> \
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="display:inline-block;"> \
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline> \
              <polyline points="17 6 23 6 23 12"></polyline> \
            </svg> \
            <span>Projected impact: ' + client.predictedImpact + '</span> \
          </div> \
        </div> \
         \
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;"> \
          <button class="btn-primary" id="btn-send-intervention"> \
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:6px; vertical-align:middle; display:inline-block;"> \
              <line x1="22" y1="2" x2="11" y2="13"></line> \
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon> \
            </svg> \
            Send Check-In \
          </button> \
          <button class="btn-secondary" id="btn-adjust-plan-action">Adjust Plan</button> \
          <button class="btn-secondary" id="btn-schedule-call-action">Schedule Call</button> \
          <button class="btn-ghost" id="btn-mark-resolved">Mark Resolved</button> \
          <button class="btn-ghost" id="btn-why-collapsible-trigger" style="margin-left: auto; font-size: 12.5px; font-weight: 600; color: var(--ink-3); border:0; background:transparent; cursor:pointer;"> \
            Why this recommendation? \
          </button> \
        </div> \
         \
        <div class="accordion-content" id="why-collapsible-content"> \
          <div class="accordion-inner"> \
            ' + client.whyContent + ' \
          </div> \
        </div> \
      </div> \
    ';
  }

  // Bind Collapsible drawer events
  const whyTrigger = document.getElementById('btn-why-collapsible-trigger');
  const whyContent = document.getElementById('why-collapsible-content');
  if (whyTrigger && whyContent) {
    whyTrigger.addEventListener('click', function() {
      whyContent.classList.toggle('expanded');
      if (whyContent.classList.contains('expanded')) {
        whyContent.style.maxHeight = whyContent.scrollHeight + "px";
        whyTrigger.textContent = "Hide explanation";
      } else {
        whyContent.style.maxHeight = "0";
        whyTrigger.textContent = "Why this recommendation?";
      }
    });
  }

  // Bind Check-In button click with a visual loading and success state
  const sendBtn = document.getElementById('btn-send-intervention');
  if (sendBtn) {
    sendBtn.addEventListener('click', function() {
      const originalText = sendBtn.innerHTML;
      sendBtn.disabled = true;
      sendBtn.style.opacity = "0.7";
      sendBtn.innerHTML = "Sending...";
      setTimeout(function() {
        sendBtn.innerHTML = "✓ Sent to " + client.first;
        sendBtn.style.background = "var(--ok)";
        sendBtn.style.borderColor = "var(--ok)";
        // Log into history timeline
        const msgText = document.getElementById(\'intervention-msg\').value;
        const newHistoryItem = {
          date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
          title: isHealthy ? "Milestone Nudge Delivered" : "AI Intervention Check-in Sent",
          detail: "Message sent by coach: \\"" + msgText + "\\"",
          outcome: "Delivered",
          outcomeClass: "ok"
        };
        client.history.unshift(newHistoryItem);
        renderHistory(client);
        
        setTimeout(function() {
          sendBtn.disabled = false;
          sendBtn.style.opacity = "1";
          sendBtn.innerHTML = originalText;
          if (isHealthy) {
            sendBtn.style.background = "var(--ok)";
            sendBtn.style.borderColor = "var(--ok)";
          } else {
            sendBtn.style.background = "var(--ink)";
            sendBtn.style.borderColor = "var(--ink)";
          }
        }, 2000);
      }, 1500);
    });
  }

  // Bind actions
  const adjustPlanBtn = document.getElementById('btn-adjust-plan-action');
  if (adjustPlanBtn) {
    adjustPlanBtn.addEventListener('click', function() {
      switchTab(\'plan\');
    });
  }

  const scheduleCallBtn = document.getElementById('btn-schedule-call-action');
  if (scheduleCallBtn) {
    scheduleCallBtn.addEventListener('click', function() {
      openScheduleCallModal();
    });
  }

  const markResolvedBtn = document.getElementById('btn-mark-resolved');
  if (markResolvedBtn) {
    markResolvedBtn.addEventListener('click', function() {
      markResolvedBtn.style.color = "var(--ok)";
      markResolvedBtn.textContent = "✓ Resolved";
      client.churnRisk = Math.round(client.churnRisk * 0.4);
      client.vitals.riskText = "Low Risk";
      client.isAtRisk = false;
      setTimeout(function() {
        renderRiskTab(client);
        // Update header strip too
        const stripRisk = document.getElementById(\'strip-risk\');
        if (stripRisk) {
          stripRisk.textContent = "Low Risk";
          stripRisk.className = "client-card-risk-badge risk-low";
        }
      }, 800);
    });
  }
}`;

// Do the content replacements
content = content.replace('${injectModalsAndStyles.toString()}', injectModalsAndStyles);
content = content.replace('${drawTimeline.toString()}', drawTimeline);
content = content.replace('${drawSparkline.toString()}', drawSparkline);
content = content.replace('${drawSparkbar.toString()}', drawSparkbar);
content = content.replace('${drawFatigueChart.toString()}', drawFatigueChart);
content = content.replace('${renderRiskCard.toString()}', renderRiskCard);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Placeholders replaced successfully!');
