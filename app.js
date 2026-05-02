    const TEAMS = [{"group": "A", "name": "México", "code": "MEX"}, {"group": "A", "name": "África do Sul", "code": "RSA"}, {"group": "A", "name": "Coreia do Sul", "code": "KOR"}, {"group": "A", "name": "Rep. Tcheca", "code": "CZE"}, {"group": "B", "name": "Canadá", "code": "CAN"}, {"group": "B", "name": "Bósnia", "code": "BIH"}, {"group": "B", "name": "Catar", "code": "QAT"}, {"group": "B", "name": "Suíça", "code": "SUI"}, {"group": "C", "name": "Brasil", "code": "BRA"}, {"group": "C", "name": "Marrocos", "code": "MAR"}, {"group": "C", "name": "Haiti", "code": "HAI"}, {"group": "C", "name": "Escócia", "code": "SCO"}, {"group": "D", "name": "Estados Unidos", "code": "USA"}, {"group": "D", "name": "Paraguai", "code": "PAR"}, {"group": "D", "name": "Austrália", "code": "AUS"}, {"group": "D", "name": "Turquia", "code": "TUR"}, {"group": "E", "name": "Alemanha", "code": "GER"}, {"group": "E", "name": "Curaçao", "code": "CUW"}, {"group": "E", "name": "Costa do Marfim", "code": "CIV"}, {"group": "E", "name": "Equador", "code": "ECU"}, {"group": "F", "name": "Holanda", "code": "NED"}, {"group": "F", "name": "Japão", "code": "JPN"}, {"group": "F", "name": "Suécia", "code": "SWE"}, {"group": "F", "name": "Tunísia", "code": "TUN"}, {"group": "G", "name": "Bélgica", "code": "BEL"}, {"group": "G", "name": "Egito", "code": "EGY"}, {"group": "G", "name": "Irã", "code": "IRN"}, {"group": "G", "name": "Nova Zelândia", "code": "NZL"}, {"group": "H", "name": "Espanha", "code": "ESP"}, {"group": "H", "name": "Cabo Verde", "code": "CPV"}, {"group": "H", "name": "Arábia Saudita", "code": "KSA"}, {"group": "H", "name": "Uruguai", "code": "URU"}, {"group": "I", "name": "França", "code": "FRA"}, {"group": "I", "name": "Senegal", "code": "SEN"}, {"group": "I", "name": "Iraque", "code": "IRQ"}, {"group": "I", "name": "Noruega", "code": "NOR"}, {"group": "J", "name": "Argentina", "code": "ARG"}, {"group": "J", "name": "Argélia", "code": "ALG"}, {"group": "J", "name": "Áustria", "code": "AUT"}, {"group": "J", "name": "Jordânia", "code": "JOR"}, {"group": "K", "name": "Portugal", "code": "POR"}, {"group": "K", "name": "Congo", "code": "COD"}, {"group": "K", "name": "Uzbequistão", "code": "UZB"}, {"group": "K", "name": "Colômbia", "code": "COL"}, {"group": "L", "name": "Inglaterra", "code": "ENG"}, {"group": "L", "name": "Croácia", "code": "CRO"}, {"group": "L", "name": "Gana", "code": "GHA"}, {"group": "L", "name": "Panamá", "code": "PAN"}];
    const FWC_START_ITEMS = ['00', '1', '2', '3', '4', '5', '6', '7', '8'];
    const FWC_END_ITEMS = ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    const COKE_ITEMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];

    const EXTRA_ROWS = [
      { group: 'Extra', name: 'FIFA World Cup History', code: 'FWC', items: FWC_END_ITEMS },
      { group: 'Extra', name: 'Figurinhas da Coca-Cola', code: 'CC', items: COKE_ITEMS }
    ];

    const COUNT_ROWS = [
      ...TEAMS.map(team => ({ ...team, id: `${team.group}-${team.code}` })),
      ...EXTRA_ROWS.map(row => ({ ...row, id: `extra-${row.code}` }))
    ];

    const DEFAULT_PACKS = {"normalPacks": 200, "mcPacks": 60};
    const DEFAULT_COUNTS = {"A-MEX": {"normal": 36, "shiny": 0, "mc": 59}, "A-RSA": {"normal": 64, "shiny": 0, "mc": 0}, "A-KOR": {"normal": 36, "shiny": 4, "mc": 0}, "A-CZE": {"normal": 11, "shiny": 0, "mc": 0}, "B-CAN": {"normal": 46, "shiny": 1, "mc": 0}, "B-BIH": {"normal": 10, "shiny": 1, "mc": 0}, "B-QAT": {"normal": 41, "shiny": 1, "mc": 0}, "B-SUI": {"normal": 29, "shiny": 3, "mc": 0}, "C-BRA": {"normal": 44, "shiny": 1, "mc": 0}, "C-MAR": {"normal": 34, "shiny": 2, "mc": 0}, "C-HAI": {"normal": 31, "shiny": 2, "mc": 0}, "C-SCO": {"normal": 54, "shiny": 2, "mc": 0}, "D-USA": {"normal": 16, "shiny": 0, "mc": 0}, "D-PAR": {"normal": 27, "shiny": 2, "mc": 0}, "D-AUS": {"normal": 33, "shiny": 2, "mc": 0}, "D-TUR": {"normal": 11, "shiny": 0, "mc": 0}, "E-GER": {"normal": 48, "shiny": 0, "mc": 0}, "E-CUW": {"normal": 42, "shiny": 1, "mc": 0}, "E-CIV": {"normal": 38, "shiny": 1, "mc": 0}, "E-ECU": {"normal": 42, "shiny": 1, "mc": 0}, "F-NED": {"normal": 27, "shiny": 4, "mc": 0}, "F-JPN": {"normal": 47, "shiny": 3, "mc": 0}, "F-SWE": {"normal": 10, "shiny": 0, "mc": 0}, "F-TUN": {"normal": 19, "shiny": 5, "mc": 0}, "G-BEL": {"normal": 49, "shiny": 2, "mc": 0}, "G-EGY": {"normal": 28, "shiny": 0, "mc": 0}, "G-IRN": {"normal": 21, "shiny": 0, "mc": 0}, "G-NZL": {"normal": 32, "shiny": 1, "mc": 0}, "H-ESP": {"normal": 31, "shiny": 1, "mc": 0}, "H-CPV": {"normal": 38, "shiny": 2, "mc": 0}, "H-KSA": {"normal": 33, "shiny": 2, "mc": 0}, "H-URU": {"normal": 17, "shiny": 2, "mc": 0}, "I-FRA": {"normal": 35, "shiny": 1, "mc": 0}, "I-SEN": {"normal": 51, "shiny": 1, "mc": 0}, "I-IRQ": {"normal": 7, "shiny": 1, "mc": 0}, "I-NOR": {"normal": 36, "shiny": 1, "mc": 0}, "J-ARG": {"normal": 32, "shiny": 2, "mc": 0}, "J-ALG": {"normal": 34, "shiny": 1, "mc": 0}, "J-AUT": {"normal": 32, "shiny": 1, "mc": 0}, "J-JOR": {"normal": 20, "shiny": 1, "mc": 0}, "K-POR": {"normal": 24, "shiny": 2, "mc": 0}, "K-COD": {"normal": 10, "shiny": 1, "mc": 0}, "K-UZB": {"normal": 15, "shiny": 0, "mc": 0}, "K-COL": {"normal": 42, "shiny": 1, "mc": 0}, "L-ENG": {"normal": 25, "shiny": 3, "mc": 0}, "L-CRO": {"normal": 58, "shiny": 0, "mc": 0}, "L-GHA": {"normal": 32, "shiny": 0, "mc": 0}, "L-PAN": {"normal": 53, "shiny": 2, "mc": 0}, "extra-FWC": {"normal": 6, "shiny": 0, "mc": 0}};
    const DEFAULT_ALBUM = {};
    const DEFAULT_ALBUM_TARGET = 2;
    const ALBUM_TABLE_STICKER_COLUMNS = 21;
    const STORAGE_VERSION = 'copa2026-v4';

    const EXTRA_ALBUM_ROWS = [
      {
        id: 'fwc-start',
        group: 'Extra',
        name: 'FWC do início',
        placement: 'start',
        cells: FWC_START_ITEMS
      },
      {
        id: 'fwc-end',
        group: 'Extra',
        name: 'FIFA World Cup History',
        placement: 'end',
        cells: FWC_END_ITEMS
      },
      {
        id: 'coke',
        group: 'Extra',
        name: 'Coca-Cola',
        placement: 'end',
        cells: COKE_ITEMS.map(item => `CC${item}`)
      }
    ];

    const store = {
      get(key, fallback) {
        const raw = localStorage.getItem(key);
        if (raw === null) return clone(fallback);
        try {
          return JSON.parse(raw);
        } catch {
          return clone(fallback);
        }
      },
      set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    };

    function clone(value) {
      return JSON.parse(JSON.stringify(value));
    }

    function initDefaults() {
      const currentVersion = localStorage.getItem('copa2026-storage-version');
      if (currentVersion !== STORAGE_VERSION) {
        store.set('copa2026-packs', clone(DEFAULT_PACKS));
        store.set('copa2026-counts', clone(DEFAULT_COUNTS));
        store.set('copa2026-album', clone(DEFAULT_ALBUM));
        localStorage.setItem('copa2026-storage-version', STORAGE_VERSION);
      }

      migrateAlbumQuantities();
    }

    function migrateAlbumQuantities() {
      const state = store.get('copa2026-album', DEFAULT_ALBUM);
      let changed = false;

      Object.keys(state).forEach(id => {
        const quantity = getAlbumQuantity(state, id);
        if (quantity <= 0) {
          delete state[id];
          changed = true;
        } else if (state[id] !== quantity) {
          state[id] = quantity;
          changed = true;
        }
      });

      if (changed) {
        store.set('copa2026-album', state);
      }
    }

    function safeInt(value) {
      const parsed = parseInt(value, 10);
      return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
    }

    function formatNumber(value) {
      return new Intl.NumberFormat('pt-BR').format(value || 0);
    }

    function getAlbumTarget() {
      const saved = safeInt(localStorage.getItem('copa2026-album-target'));
      return saved >= 1 ? saved : DEFAULT_ALBUM_TARGET;
    }

    function setAlbumTarget(value) {
      const target = Math.max(1, Math.min(20, safeInt(value) || DEFAULT_ALBUM_TARGET));
      localStorage.setItem('copa2026-album-target', String(target));
      const input = document.getElementById('albumTarget');
      if (input) input.value = target;
      renderAlbumTable();
      renderCountTable();
      syncBackupJson();
    }

    function restoreAlbumTarget() {
      const input = document.getElementById('albumTarget');
      if (input) input.value = getAlbumTarget();
    }

    function getAlbumQuantity(albumState, id) {
      const value = albumState[id];
      if (value === true) return 1;
      if (value === false || value === null || value === undefined) return 0;
      return safeInt(value);
    }

    function getNextAlbumQuantity(quantity) {
      return quantity + 1;
    }

    function getPreviousAlbumQuantity(quantity) {
      return Math.max(0, quantity - 1);
    }

    function setAlbumQuantity(albumState, id, quantity) {
      if (quantity <= 0) {
        delete albumState[id];
        return;
      }

      albumState[id] = quantity;
    }

    function getAlbumPressState(quantity) {
      const target = getAlbumTarget();
      if (quantity <= 0) return 'false';
      return quantity >= target ? 'true' : 'mixed';
    }

    function getAlbumStickerClass(quantity) {
      const target = getAlbumTarget();
      if (quantity > target) return ' owned complete repeated';
      if (quantity >= target) return ' owned complete';
      return quantity > 0 ? ' owned' : '';
    }

    function getAlbumStickerTypeClass(cell) {
      if (cell.type === 'shiny') return ' shiny';
      if (cell.type === 'profiled-normal') return ' profiled-normal';
      return '';
    }

    function getAlbumStickerTypeLabel(cell) {
      if (cell.type === 'shiny') return 'BR';
      if (cell.type === 'profiled-normal') return 'Perfilada';
      return '';
    }

    function getAlbumStickerTypeDescription(cell) {
      if (cell.type === 'shiny') return 'brilhante';
      if (cell.type === 'profiled-normal') return 'perfilada normal';
      return '';
    }

    function getAlbumStickerContent(cell, quantity) {
      const target = getAlbumTarget();
      const quantityText = quantity > target ? `${quantity}x` : `${quantity}/${target}`;
      const typeLabel = getAlbumStickerTypeLabel(cell);
      const typeBadge = typeLabel ? `<span class="album-type-badge">${typeLabel}</span>` : '';
      const quantityLabel = quantity > 0 ? `<span class="album-qty">${quantityText}</span>` : '';
      return `<span class="album-label">${cell.label}</span>${typeBadge}${quantityLabel}`;
    }

    function getAlbumStickerAriaLabel(cell, quantity) {
      const target = getAlbumTarget();
      const typeDescription = getAlbumStickerTypeDescription(cell);
      const suffix = typeDescription ? `, ${typeDescription}` : '';
      return `${cell.label}${suffix}: ${quantity} figurinha(s), ${Math.max(0, target - quantity)} faltando para ${target} albuns`;
    }

    function renderAlbumStickerCell(cell, index, albumState) {
      if (!cell) {
        const sticky = index === 0 ? ' sticky-col-3' : '';
        return `<td class="number-cell album-empty-cell${sticky}" aria-hidden="true"></td>`;
      }

      const quantity = getAlbumQuantity(albumState, cell.id);
      const sticky = index === 0 ? ' sticky-col-3' : '';
      if (cell.type === 'code') {
        return `<td class="code-cell number-cell${sticky}" aria-hidden="true">${cell.label}</td>`;
      }

      return `<td class="album-sticker number-cell${sticky}${getAlbumStickerTypeClass(cell)}${getAlbumStickerClass(quantity)}" data-album-id="${cell.id}" tabindex="0" role="button" aria-pressed="${getAlbumPressState(quantity)}" aria-label="${getAlbumStickerAriaLabel(cell, quantity)}">${getAlbumStickerContent(cell, quantity)}</td>`;
    }

    function getAlbumCellsForTeam(team) {
      return [
        { id: `${team.group}-${team.code}-START-CODE`, label: team.code, type: 'code' },
        ...Array.from({ length: 10 }, (_, index) => {
          const stickerId = index.toString().padStart(2, '0');
          const label = index + 1;
          return { id: `${team.group}-${team.code}-${stickerId}`, label, type: label === 1 ? 'shiny' : 'normal' };
        }),
        ...Array.from({ length: 10 }, (_, index) => {
          const value = index + 11;
          return { id: `${team.group}-${team.code}-${value}`, label: value, type: value === 13 ? 'profiled-normal' : 'normal' };
        })
      ];
    }

    function getSelectableAlbumCells(cells) {
      return cells.filter(cell => cell.type !== 'code');
    }

    function getExtraAlbumCells(row) {
      return row.cells.map(label => ({
        id: `extra-${row.id}-${label}`,
        label
      }));
    }

    function getExtraAlbumTableCells(row) {
      const cells = getExtraAlbumCells(row);
      return Array.from({ length: ALBUM_TABLE_STICKER_COLUMNS }, (_, index) => cells[index] || null);
    }

    function getAlbumRows() {
      const startExtras = EXTRA_ALBUM_ROWS.filter(row => row.placement === 'start');
      const endExtras = EXTRA_ALBUM_ROWS.filter(row => row.placement === 'end');

      return [
        ...startExtras.map(row => ({
          id: `extra-${row.id}`,
          group: row.group,
          name: row.name,
          cells: getExtraAlbumCells(row)
        })),
        ...TEAMS.map(team => ({
          id: `${team.group}-${team.code}`,
          group: `Grupo ${team.group}`,
          name: team.name,
          cells: getSelectableAlbumCells(getAlbumCellsForTeam(team))
        })),
        ...endExtras.map(row => ({
          id: `extra-${row.id}`,
          group: row.group,
          name: row.name,
          cells: getExtraAlbumCells(row)
        }))
      ];
    }

    function getAlbumStickerIds() {
      return getAlbumRows().flatMap(row => row.cells.map(cell => cell.id));
    }

    function renderPackMetrics() {
      const normalPacks = safeInt(document.getElementById('normalPacks').value);
      const mcPacks = safeInt(document.getElementById('mcPacks').value);

      const totalNormalFromPacks = (normalPacks * 7) + (mcPacks * 4);
      const totalProfiledFromPacks = mcPacks;
      const totalFromPacks = (normalPacks * 7) + (mcPacks * 5);
      const totalPacks = normalPacks + mcPacks;

      const metrics = [
        { label: 'Total de envelopes', value: totalPacks, sub: `${formatNumber(normalPacks)} normais + ${formatNumber(mcPacks)} MC` },
        { label: 'Figurinhas estimadas', value: totalFromPacks, sub: 'Somando envelopes normais e MC' },
        { label: 'Normais estimadas', value: totalNormalFromPacks, sub: '7 no normal + 4 no MC' },
        { label: 'Perfiladas MC estimadas', value: totalProfiledFromPacks, sub: '1 perfilada por envelope MC' }
      ];

      document.getElementById('packMetrics').innerHTML = metrics.map(metric => `
        <div class="metric">
          <div class="metric-label">${metric.label}</div>
          <div class="metric-value">${formatNumber(metric.value)}</div>
          <div class="metric-sub">${metric.sub}</div>
        </div>
      `).join('');

      store.set('copa2026-packs', { normalPacks, mcPacks });
      renderCollectionMetrics();
    }

    function renderAlbumTable() {
      const table = document.getElementById('albumTable');
      const albumState = store.get('copa2026-album', DEFAULT_ALBUM);
      const groupCounts = TEAMS.reduce((acc, team) => {
        acc[team.group] = (acc[team.group] || 0) + 1;
        return acc;
      }, {});
      const startExtras = EXTRA_ALBUM_ROWS.filter(row => row.placement === 'start');
      const endExtras = EXTRA_ALBUM_ROWS.filter(row => row.placement === 'end');

      let html = `
        <thead>
          <tr>
            <th class="sticky-top sticky-col-1">Grupo</th>
            <th class="sticky-top sticky-col-2">Seleção</th>
            <th class="sticky-top" colspan="11">Página inicial</th>
            <th class="sticky-top" colspan="10">Continuação</th>
          </tr>
        </thead>
        <tbody>
      `;

      startExtras.forEach(row => {
        html += `
          <tr class="album-extra-row album-extra-start">
            <td class="group-cell sticky-col-1">Extra</td>
            <td class="selection-cell sticky-col-2">${row.name}</td>
            ${getExtraAlbumTableCells(row).map((cell, index) => renderAlbumStickerCell(cell, index, albumState)).join('')}
          </tr>
        `;
      });

      let lastGroup = null;
      TEAMS.forEach(team => {
        const isGroupStart = team.group !== lastGroup;
        html += `<tr class="album-team-row${isGroupStart ? ' album-team-group-start' : ''}">`;

        if (isGroupStart) {
          html += `<td class="group-cell sticky-col-1" rowspan="${groupCounts[team.group]}">Grupo ${team.group}</td>`;
          lastGroup = team.group;
        }

        html += `<td class="selection-cell sticky-col-2">${team.name}</td>`;

        const cells = getAlbumCellsForTeam(team);

        cells.forEach((cell, index) => {
          html += renderAlbumStickerCell(cell, index, albumState);
        });

        html += '</tr>';
      });

      endExtras.forEach(row => {
        html += `
          <tr class="album-extra-row album-extra-end">
            <td class="group-cell sticky-col-1">Extra</td>
            <td class="selection-cell sticky-col-2">${row.name}</td>
            ${getExtraAlbumTableCells(row).map((cell, index) => renderAlbumStickerCell(cell, index, albumState)).join('')}
          </tr>
        `;
      });

      html += '</tbody>';
      table.innerHTML = html;
      bindAlbumInputs();
      renderAlbumMetrics();
      renderMobileAlbumSelector();
    }

    function bindAlbumInputs() {
      document.querySelectorAll('[data-album-id]').forEach(cell => {
        const changeQuantity = direction => {
          const state = store.get('copa2026-album', DEFAULT_ALBUM);
          const id = cell.dataset.albumId;
          const quantity = getAlbumQuantity(state, id);
          const nextQuantity = direction < 0 ? getPreviousAlbumQuantity(quantity) : getNextAlbumQuantity(quantity);
          setAlbumQuantity(state, id, nextQuantity);
          store.set('copa2026-album', state);
          renderAlbumTable();
        };

        cell.addEventListener('click', event => {
          changeQuantity(event.shiftKey ? -1 : 1);
        });
        cell.addEventListener('contextmenu', event => {
          event.preventDefault();
          changeQuantity(-1);
        });
        cell.addEventListener('keydown', event => {
          if ((event.key === 'Enter' || event.key === ' ') && cell.tagName !== 'BUTTON') {
            event.preventDefault();
            changeQuantity(1);
          }

          if (event.key === 'Backspace' || event.key === 'Delete') {
            event.preventDefault();
            changeQuantity(-1);
          }
        });
      });
    }

    function renderMobileAlbumSelector() {
      const picker = document.getElementById('mobileAlbumPicker');
      if (!picker) return;

      const albumRows = getAlbumRows();
      const currentValue = picker.querySelector('#mobileTeamSelect')?.value || albumRows[0].id;
      const selectedRow = albumRows.find(row => row.id === currentValue) || albumRows[0];
      const selectedValue = selectedRow.id;
      const albumState = store.get('copa2026-album', DEFAULT_ALBUM);
      const cells = selectedRow.cells;

      picker.innerHTML = `
        <div class="mobile-album-controls">
          <label for="mobileTeamSelect">Selecionar selecao</label>
          <select id="mobileTeamSelect">
            ${albumRows.map(row => {
              return `<option value="${row.id}"${row.id === selectedValue ? ' selected' : ''}>${row.group} - ${row.name}</option>`;
            }).join('')}
          </select>
        </div>
        <div class="mobile-album-grid">
          ${cells.map(cell => {
            const quantity = getAlbumQuantity(albumState, cell.id);
            return `<button type="button" class="mobile-album-sticker${getAlbumStickerTypeClass(cell)}${getAlbumStickerClass(quantity)}" data-mobile-album-id="${cell.id}" aria-pressed="${getAlbumPressState(quantity)}" aria-label="${getAlbumStickerAriaLabel(cell, quantity)}">${getAlbumStickerContent(cell, quantity)}</button>`;
          }).join('')}
        </div>
      `;

      picker.querySelector('#mobileTeamSelect').addEventListener('change', renderMobileAlbumSelector);
      picker.querySelectorAll('[data-mobile-album-id]').forEach(button => {
        button.addEventListener('click', event => {
          const state = store.get('copa2026-album', DEFAULT_ALBUM);
          const id = event.currentTarget.dataset.mobileAlbumId;
          const quantity = getAlbumQuantity(state, id);
          const nextQuantity = event.shiftKey ? getPreviousAlbumQuantity(quantity) : getNextAlbumQuantity(quantity);
          setAlbumQuantity(state, id, nextQuantity);
          store.set('copa2026-album', state);
          renderAlbumTable();
        });
        button.addEventListener('contextmenu', event => {
          event.preventDefault();
          const state = store.get('copa2026-album', DEFAULT_ALBUM);
          const id = event.currentTarget.dataset.mobileAlbumId;
          const quantity = getAlbumQuantity(state, id);
          setAlbumQuantity(state, id, getPreviousAlbumQuantity(quantity));
          store.set('copa2026-album', state);
          renderAlbumTable();
        });
      });
    }

    function renderAlbumMetrics() {
      const albumState = store.get('copa2026-album', DEFAULT_ALBUM);
      const albumStickerIds = new Set(getAlbumStickerIds());
      const target = getAlbumTarget();
      const quantities = Array.from(albumStickerIds).map(id => getAlbumQuantity(albumState, id));
      const ownedTotal = quantities.reduce((sum, quantity) => sum + quantity, 0);
      const filled = quantities.reduce((sum, quantity) => sum + Math.min(quantity, target), 0);
      const repeated = quantities.reduce((sum, quantity) => sum + Math.max(0, quantity - target), 0);
      const totalAlbum = albumStickerIds.size * target;
      const missing = totalAlbum - filled;
      const albumLabel = target === 1 ? '1 álbum' : `${target} álbuns`;

      const metrics = [
        { label: 'Figurinhas cadastradas', value: ownedTotal, sub: 'Total marcado na tabela, incluindo repetidas' },
        { label: `Preenchidas nos ${albumLabel}`, value: filled, sub: `Base de ${formatNumber(totalAlbum)} posições necessárias` },
        { label: 'Ainda faltando', value: missing, sub: `Para completar ${albumLabel}` },
        { label: 'Repetidas', value: repeated, sub: `Quantidade acima de ${target} por figurinha` }
      ];

      document.getElementById('albumMetrics').innerHTML = metrics.map(metric => `
        <div class="metric">
          <div class="metric-label">${metric.label}</div>
          <div class="metric-value">${formatNumber(metric.value)}</div>
          <div class="metric-sub">${metric.sub}</div>
        </div>
      `).join('');

      renderInsightCharts();
    }

    function syncBackupJson() {
      const textarea = document.getElementById('backupJson');
      if (!textarea) return;
      textarea.value = JSON.stringify(getBackupPayload(), null, 2);
    }

    function renderCountTable() {
      const table = document.getElementById('countTable');
      const counts = store.get('copa2026-counts', DEFAULT_COUNTS);

      let html = `
        <thead>
          <tr>
            <th class="sticky-top sticky-col-1">Grupo</th>
            <th class="sticky-top sticky-col-2">Seleção / Extra</th>
            <th class="sticky-top">Código</th>
            <th class="sticky-top">Normais</th>
            <th class="sticky-top">Brilhantes</th>
            <th class="sticky-top">Perfiladas MC</th>
            <th class="sticky-top">Total</th>
          </tr>
        </thead>
        <tbody>
      `;

      COUNT_ROWS.forEach(row => {
        const rowCounts = counts[row.id] || { normal: 0, shiny: 0, mc: 0 };
        const total = safeInt(rowCounts.normal) + safeInt(rowCounts.shiny) + safeInt(rowCounts.mc);

        html += `
          <tr data-filter="${`${row.group} ${row.name} ${row.code}`.toLowerCase()}">
            <td class="group-cell sticky-col-1">${row.group}</td>
            <td class="selection-cell sticky-col-2">${row.name}</td>
            <td class="code-cell">${row.code}</td>
            <td><input class="count-input js-count" type="number" min="0" step="1" value="${safeInt(rowCounts.normal)}" data-id="${row.id}" data-kind="normal" /></td>
            <td><input class="count-input js-count" type="number" min="0" step="1" value="${safeInt(rowCounts.shiny)}" data-id="${row.id}" data-kind="shiny" /></td>
            <td><input class="count-input js-count" type="number" min="0" step="1" value="${safeInt(rowCounts.mc)}" data-id="${row.id}" data-kind="mc" /></td>
            <td class="total-cell" data-total-for="${row.id}">${formatNumber(total)}</td>
          </tr>
        `;
      });

      html += '</tbody>';
      table.innerHTML = html;
      bindCountInputs();
      renderCollectionMetrics();
      applyFilter();
    }

    function bindCountInputs() {
      document.querySelectorAll('.js-count').forEach(input => {
        input.addEventListener('input', event => {
          const counts = store.get('copa2026-counts', DEFAULT_COUNTS);
          const { id, kind } = event.target.dataset;
          counts[id] = counts[id] || { normal: 0, shiny: 0, mc: 0 };
          counts[id][kind] = safeInt(event.target.value);
          store.set('copa2026-counts', counts);
          updateRowTotal(id, counts[id]);
          renderCollectionMetrics();
        });
      });
    }

    function updateRowTotal(id, rowCounts) {
      const total = safeInt(rowCounts.normal) + safeInt(rowCounts.shiny) + safeInt(rowCounts.mc);
      const cell = document.querySelector(`[data-total-for="${id}"]`);
      if (cell) cell.textContent = formatNumber(total);
    }

    function renderCollectionMetrics() {
      const counts = store.get('copa2026-counts', DEFAULT_COUNTS);
      let normalTotal = 0;
      let shinyTotal = 0;
      let mcTotal = 0;

      COUNT_ROWS.forEach(row => {
        const rowCounts = counts[row.id] || { normal: 0, shiny: 0, mc: 0 };
        normalTotal += safeInt(rowCounts.normal);
        shinyTotal += safeInt(rowCounts.shiny);
        mcTotal += safeInt(rowCounts.mc);
      });

      const total = normalTotal + shinyTotal + mcTotal;
      const packs = store.get('copa2026-packs', DEFAULT_PACKS);
      const expectedTotal = (safeInt(packs.normalPacks) * 7) + (safeInt(packs.mcPacks) * 5);
      const diff = total - expectedTotal;
      const diffLabel = diff === 0 ? 'bate com os envelopes' : diff > 0 ? `${formatNumber(diff)} acima dos envelopes` : `${formatNumber(Math.abs(diff))} abaixo dos envelopes`;

      const metrics = [
        { label: 'Normais cadastradas', value: normalTotal, sub: 'Soma de todas as seleções e extras' },
        { label: 'Brilhantes cadastradas', value: shinyTotal, sub: 'Informadas manualmente' },
        { label: 'Perfiladas MC cadastradas', value: mcTotal, sub: 'Informadas manualmente' },
        { label: 'Total cadastrado', value: total, sub: diffLabel }
      ];

      document.getElementById('collectionMetrics').innerHTML = metrics.map(metric => `
        <div class="metric">
          <div class="metric-label">${metric.label}</div>
          <div class="metric-value">${formatNumber(metric.value)}</div>
          <div class="metric-sub">${metric.sub}</div>
        </div>
      `).join('');

      renderDisparityCharts();
      syncBackupJson();
    }


    function renderDisparityCharts() {
      const counts = store.get('copa2026-counts', DEFAULT_COUNTS);
      const teamsWithTotals = TEAMS.map(team => {
        const id = `${team.group}-${team.code}`;
        const rowCounts = counts[id] || { normal: 0, shiny: 0, mc: 0 };
        return {
          label: `${team.code} · ${team.name}`,
          total: safeInt(rowCounts.normal) + safeInt(rowCounts.shiny) + safeInt(rowCounts.mc)
        };
      });

      const sortedDesc = [...teamsWithTotals].sort((a, b) => b.total - a.total || a.label.localeCompare(b.label));
      const sortedAsc = [...teamsWithTotals].sort((a, b) => a.total - b.total || a.label.localeCompare(b.label));

      const topItems = sortedDesc.slice(0, 10);
      const bottomItems = sortedAsc.slice(0, 10);

      const renderBars = (items, mountId) => {
        const base = Math.max(...items.map(item => item.total), 1);
        document.getElementById(mountId).innerHTML = items.map(item => `
          <div class="bar-row">
            <div class="bar-name">${item.label}</div>
            <div class="bar-track">
              <div class="bar-fill" style="width: ${(item.total / base) * 100}%"></div>
            </div>
            <div class="bar-value">${formatNumber(item.total)}</div>
          </div>
        `).join('');
      };

      renderBars(topItems, 'topTeamsChart');
      renderBars(bottomItems, 'bottomTeamsChart');

      const maxTeam = sortedDesc[0] || { label: '-', total: 0 };
      const minTeam = sortedAsc[0] || { label: '-', total: 0 };
      const average = teamsWithTotals.length ? teamsWithTotals.reduce((sum, item) => sum + item.total, 0) / teamsWithTotals.length : 0;
      const spread = maxTeam.total - minTeam.total;

      const metrics = [
        { label: 'Maior total', value: maxTeam.total, sub: maxTeam.label },
        { label: 'Menor total', value: minTeam.total, sub: minTeam.label },
        { label: 'Diferença', value: spread, sub: 'Distância entre a maior e a menor seleção' },
        { label: 'Média por seleção', value: Math.round(average), sub: 'Referência para comparar disparidades' }
      ];

      document.getElementById('disparityMetrics').innerHTML = metrics.map(metric => `
        <div class="metric">
          <div class="metric-label">${metric.label}</div>
          <div class="metric-value">${formatNumber(metric.value)}</div>
          <div class="metric-sub">${metric.sub}</div>
        </div>
      `).join('');

      renderInsightCharts();
    }

    function renderBarList(mountId, items) {
      const mount = document.getElementById(mountId);
      if (!mount) return;

      const base = Math.max(...items.map(item => item.value), 1);
      mount.innerHTML = items.map(item => `
        <div class="bar-row">
          <div class="bar-name">${item.label}</div>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${(item.value / base) * 100}%"></div>
          </div>
          <div class="bar-value">${item.displayValue || formatNumber(item.value)}</div>
        </div>
      `).join('');
    }

    function getTeamCountTotals() {
      const counts = store.get('copa2026-counts', DEFAULT_COUNTS);
      return TEAMS.map(team => {
        const id = `${team.group}-${team.code}`;
        const rowCounts = counts[id] || { normal: 0, shiny: 0, mc: 0 };
        const normal = safeInt(rowCounts.normal);
        const shiny = safeInt(rowCounts.shiny);
        const mc = safeInt(rowCounts.mc);
        return {
          id,
          group: team.group,
          label: `${team.code} · ${team.name}`,
          normal,
          shiny,
          mc,
          total: normal + shiny + mc
        };
      });
    }

    function getAlbumStatsForCells(cells, albumState) {
      const target = getAlbumTarget();
      return cells.reduce((acc, cell) => {
        const quantity = getAlbumQuantity(albumState, cell.id);
        acc.owned += quantity;
        acc.filled += Math.min(quantity, target);
        acc.repeated += Math.max(0, quantity - target);
        acc.total += target;
        return acc;
      }, { owned: 0, filled: 0, repeated: 0, total: 0 });
    }

    function renderInsightCharts() {
      const teamTotals = getTeamCountTotals();
      const groupTotals = Array.from(teamTotals.reduce((map, item) => {
        map.set(item.group, (map.get(item.group) || 0) + item.total);
        return map;
      }, new Map()).entries()).map(([group, value]) => ({ label: `Grupo ${group}`, value }));

      const normalTotal = teamTotals.reduce((sum, item) => sum + item.normal, 0);
      const shinyTotal = teamTotals.reduce((sum, item) => sum + item.shiny, 0);
      const mcTotal = teamTotals.reduce((sum, item) => sum + item.mc, 0);
      const totalCount = normalTotal + shinyTotal + mcTotal;

      const albumState = store.get('copa2026-album', DEFAULT_ALBUM);
      const counts = store.get('copa2026-counts', DEFAULT_COUNTS);
      const teamAlbumStats = TEAMS.map(team => {
        const cells = getSelectableAlbumCells(getAlbumCellsForTeam(team));
        const stats = getAlbumStatsForCells(cells, albumState);
        return {
          id: `${team.group}-${team.code}`,
          label: `${team.code} · ${team.name}`,
          missing: stats.total - stats.filled,
          repeated: stats.repeated,
          filled: stats.filled,
          owned: stats.owned
        };
      });

      const inconsistencies = teamAlbumStats.map(item => {
        const rowCounts = counts[item.id] || { normal: 0, shiny: 0, mc: 0 };
        const countTotal = safeInt(rowCounts.normal) + safeInt(rowCounts.shiny) + safeInt(rowCounts.mc);
        const diff = item.owned - countTotal;
        const direction = diff > 0 ? 'tabela acima' : diff < 0 ? 'contador acima' : 'ok';
        return {
          label: `${item.label} (${direction})`,
          value: Math.abs(diff),
          displayValue: diff === 0 ? '0' : `${diff > 0 ? '+' : '-'}${formatNumber(Math.abs(diff))}`
        };
      }).filter(item => item.value > 0).sort((a, b) => b.value - a.value || a.label.localeCompare(b.label)).slice(0, 12);

      const extraStats = EXTRA_ALBUM_ROWS.map(row => {
        const stats = getAlbumStatsForCells(getExtraAlbumCells(row), albumState);
        return { label: row.name, value: stats.filled, missing: stats.total - stats.filled, repeated: stats.repeated };
      });

      const closestTeams = [...teamAlbumStats]
        .sort((a, b) => a.missing - b.missing || b.filled - a.filled || a.label.localeCompare(b.label))
        .slice(0, 10)
        .map(item => ({ label: item.label, value: item.missing }));

      const repeatedTeams = [...teamAlbumStats]
        .sort((a, b) => b.repeated - a.repeated || a.label.localeCompare(b.label))
        .slice(0, 10)
        .map(item => ({ label: item.label, value: item.repeated }));

      const topGroup = [...groupTotals].sort((a, b) => b.value - a.value)[0] || { label: '-', value: 0 };
      const mostRepeated = [...teamAlbumStats].sort((a, b) => b.repeated - a.repeated || a.label.localeCompare(b.label))[0] || { label: '-', repeated: 0 };
      const leastMissing = [...teamAlbumStats].sort((a, b) => a.missing - b.missing || a.label.localeCompare(b.label))[0] || { label: '-', missing: 0 };
      const biggestInconsistency = inconsistencies[0] || { label: 'Sem divergências', value: 0 };
      const shinyRate = totalCount ? Math.round((shinyTotal / totalCount) * 100) : 0;

      document.getElementById('insightMetrics').innerHTML = [
        { label: 'Grupo mais cheio', value: topGroup.value, sub: topGroup.label },
        { label: 'Mais perto de fechar', value: leastMissing.missing, sub: `${leastMissing.label} faltando` },
        { label: 'Mais repetidas', value: mostRepeated.repeated, sub: mostRepeated.label },
        { label: '% brilhantes', value: shinyRate, sub: 'Sobre o total cadastrado' },
        { label: 'Maior incoerência', value: biggestInconsistency.value, sub: biggestInconsistency.label }
      ].map(metric => `
        <div class="metric">
          <div class="metric-label">${metric.label}</div>
          <div class="metric-value">${formatNumber(metric.value)}</div>
          <div class="metric-sub">${metric.sub}</div>
        </div>
      `).join('');

      renderBarList('groupTotalsChart', groupTotals);
      renderBarList('compositionChart', [
        { label: 'Normais', value: normalTotal },
        { label: 'Brilhantes', value: shinyTotal },
        { label: 'Perfiladas MC', value: mcTotal }
      ]);
      renderBarList('closestTeamsChart', closestTeams);
      renderBarList('repeatedTeamsChart', repeatedTeams);
      renderBarList('extraAlbumChart', extraStats.flatMap(item => [
        { label: `${item.label} preenchidas`, value: item.value },
        { label: `${item.label} faltantes`, value: item.missing },
        { label: `${item.label} repetidas`, value: item.repeated }
      ]));
      renderBarList('inconsistencyChart', inconsistencies.length ? inconsistencies : [{ label: 'Nenhuma incoerência encontrada', value: 0, displayValue: '0' }]);
    }

    function applyFilter() {
      const query = document.getElementById('filterInput').value.trim().toLowerCase();
      document.querySelectorAll('#countTable tbody tr').forEach(row => {
        const haystack = row.dataset.filter || '';
        row.style.display = haystack.includes(query) ? '' : 'none';
      });
    }

    function restoreInputs() {
      const packs = store.get('copa2026-packs', DEFAULT_PACKS);
      document.getElementById('normalPacks').value = safeInt(packs.normalPacks);
      document.getElementById('mcPacks').value = safeInt(packs.mcPacks);
    }

    function clearCounts() {
      if (!confirm('Zerar toda a contagem por seleção?')) return;
      store.set('copa2026-counts', {});
      renderCountTable();
    }

    function resetDefaults() {
      if (!confirm('Voltar para os dados padrão que você passou?')) return;
      store.set('copa2026-counts', clone(DEFAULT_COUNTS));
      store.set('copa2026-packs', clone(DEFAULT_PACKS));
      restoreInputs();
      renderPackMetrics();
      renderCountTable();
    }

    function clearAll() {
      if (!confirm('Zerar envelopes, contagem e marcações do álbum?')) return;
      store.set('copa2026-counts', {});
      store.set('copa2026-packs', { normalPacks: 0, mcPacks: 0 });
      store.set('copa2026-album', {});
      restoreInputs();
      renderPackMetrics();
      renderCountTable();
      renderAlbumTable();
    }

    function clearAlbum() {
      if (!confirm('Zerar somente as marcações clicáveis do álbum?')) return;
      store.set('copa2026-album', {});
      renderAlbumTable();
    }

    function getBackupPayload() {
      return {
        schema: 'copa2026-album-backup-v1',
        exportedAt: new Date().toISOString(),
        storageVersion: STORAGE_VERSION,
        data: {
          packs: store.get('copa2026-packs', DEFAULT_PACKS),
          counts: store.get('copa2026-counts', DEFAULT_COUNTS),
          album: store.get('copa2026-album', DEFAULT_ALBUM),
          albumTarget: getAlbumTarget(),
          theme: localStorage.getItem('copa2026-theme') || 'light'
        }
      };
    }

    function setBackupStatus(message) {
      document.getElementById('backupStatus').textContent = message;
    }

    function setImportStatus(message) {
      document.getElementById('importStatus').textContent = message;
    }

    function getBackupJson() {
      syncBackupJson();
      return document.getElementById('backupJson').value;
    }

    function exportJson() {
      const json = getBackupJson();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `album-copa-2026-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setBackupStatus('JSON exportado.');
    }

    async function copyJson() {
      const json = getBackupJson();
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(json);
        } else {
          const textarea = document.getElementById('backupJson');
          textarea.focus();
          textarea.select();
          document.execCommand('copy');
        }
        setBackupStatus('JSON copiado para a area de transferencia.');
      } catch {
        setBackupStatus('Nao foi possivel copiar automaticamente. Selecione o texto e copie manualmente.');
      }
    }

    function normalizeImportedBackup(raw) {
      const parsed = JSON.parse(raw);
      const data = parsed.data || parsed;

      if (!data || typeof data !== 'object') {
        throw new Error('JSON invalido.');
      }

      return {
        packs: data.packs && typeof data.packs === 'object' ? data.packs : null,
        counts: data.counts && typeof data.counts === 'object' ? data.counts : null,
        album: data.album && typeof data.album === 'object' ? data.album : null,
        albumTarget: safeInt(data.albumTarget),
        theme: data.theme
      };
    }

    function refreshAllViews() {
      restoreInputs();
      restoreAlbumTarget();
      renderPackMetrics();
      renderAlbumTable();
      renderCountTable();
      getBackupJson();
    }

    function applyImportedBackup(raw) {
      const data = normalizeImportedBackup(raw);

      if (data.packs) store.set('copa2026-packs', data.packs);
      if (data.counts) store.set('copa2026-counts', data.counts);
      if (data.album) store.set('copa2026-album', data.album);
      if (data.albumTarget >= 1) localStorage.setItem('copa2026-album-target', String(Math.min(20, data.albumTarget)));
      if (data.theme === 'dark' || data.theme === 'light') applyTheme(data.theme);

      migrateAlbumQuantities();
      restoreAlbumTarget();
      refreshAllViews();
      setImportStatus('JSON importado com sucesso.');
    }

    function importJsonFromTextarea() {
      const raw = document.getElementById('importJsonText').value.trim();
      if (!raw) {
        setImportStatus('Cole um JSON antes de importar.');
        return;
      }

      try {
        applyImportedBackup(raw);
      } catch (error) {
        setImportStatus(`Erro ao importar: ${error.message}`);
      }
    }

    function importJsonFile(file) {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          document.getElementById('importJsonText').value = String(reader.result || '');
          applyImportedBackup(String(reader.result || ''));
        } catch (error) {
          setImportStatus(`Erro ao importar arquivo: ${error.message}`);
        }
      };
      reader.onerror = () => setImportStatus('Nao foi possivel ler o arquivo.');
      reader.readAsText(file);
    }

    function applyTheme(theme) {
      const nextTheme = theme === 'dark' ? 'dark' : 'light';
      document.body.dataset.theme = nextTheme;
      localStorage.setItem('copa2026-theme', nextTheme);
      const select = document.getElementById('themeSelect');
      if (select) select.value = nextTheme;
    }

    function restoreTheme() {
      applyTheme(localStorage.getItem('copa2026-theme') || 'light');
    }

    document.getElementById('normalPacks').addEventListener('input', renderPackMetrics);
    document.getElementById('mcPacks').addEventListener('input', renderPackMetrics);
    document.getElementById('filterInput').addEventListener('input', applyFilter);
    document.getElementById('clearCounts').addEventListener('click', clearCounts);
    document.getElementById('resetDefaults').addEventListener('click', resetDefaults);
    document.getElementById('clearAll').addEventListener('click', clearAll);
    document.getElementById('clearAlbum').addEventListener('click', clearAlbum);
    document.getElementById('albumTarget').addEventListener('input', event => setAlbumTarget(event.target.value));
    document.getElementById('themeSelect').addEventListener('change', event => applyTheme(event.target.value));
    document.getElementById('exportJson').addEventListener('click', exportJson);
    document.getElementById('copyJson').addEventListener('click', copyJson);
    document.getElementById('importJson').addEventListener('click', importJsonFromTextarea);
    document.getElementById('importJsonFileButton').addEventListener('click', () => document.getElementById('importJsonFile').click());
    document.getElementById('importJsonFile').addEventListener('change', event => importJsonFile(event.target.files[0]));

    restoreTheme();
    initDefaults();
    restoreInputs();
    restoreAlbumTarget();
    renderPackMetrics();
    renderAlbumTable();
    renderCountTable();
    getBackupJson();