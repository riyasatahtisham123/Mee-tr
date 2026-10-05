import React, { useState, useEffect } from 'react';
import './mettquestions.css';

const MettQuestionsScores = () => {
  // Initial questions data with score states
  const initialQuestions = [
    { id: 1, no: '1', text: 'Does the PA have legal status or is it established through "other effective means"?', score1: 3, score2: 0, stage: 'Planning', type: 'normal' },
    { id: 2, no: '2', text: 'Is management undertaken to achieve the objectives of the protected area?', score1: 3, score2: 0, stage: 'Planning', type: 'normal' },
    { id: 3, no: '3', text: 'Are appropriate regulations/controls in place to manage use and activities in accordance with the management objectives of the protected area?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 4, no: '4', text: 'Does land and sea use planning outside of the protected area recognise the protected area and contribute to the achievement of its objectives?', score1: 3, score2: 0, stage: 'Planning', type: 'normal' },
    { id: 5, no: '5', text: 'Is the protected area the right size and shape to protect species, habitats, ecological processes and water catchments of key conservation concern?', score1: 3, score2: 0, stage: 'Planning', type: 'normal' },
    { id: 6, no: '6', text: 'Is the boundary known and demarcated?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 7, no: '7', text: 'Is there a management plan or equivalent and is it being implemented?', score1: 3, score2: 0, stage: 'Planning', type: 'normal' },
    { id: 8, no: '7a-c', text: 'Additional points: Planning process', score1: 3, score2: 0, stage: 'Planning', type: 'normal' },
    { id: 9, no: '8', text: 'Is there a regular work plan and is it being implemented?', score1: 3, score2: 0, stage: 'Planning', type: 'normal' },
    { id: 10, no: '9', text: 'Do you have enough information to manage the area?', score1: 3, score2: 0, stage: 'Inputs', type: 'normal' },
    { id: 11, no: '10', text: 'Are there enough people to manage the protected area?', score1: 3, score2: 0, stage: 'Inputs', type: 'normal' },
    { id: 12, no: '11', text: 'Do the people involved in managing the protected area have the necessary knowledge and skills?', score1: 3, score2: 0, stage: 'Inputs', type: 'normal' },
    { id: 13, no: '12', text: 'Is the current budget sufficient?', score1: 3, score2: 0, stage: 'Inputs', type: 'normal' },
    { id: 14, no: '13', text: 'Is the budget secure?', score1: 3, score2: 0, stage: 'Inputs', type: 'normal' },
    { id: 15, no: '14', text: 'Is the budget managed to ensure effective administration of the protected area?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 16, no: '15', text: 'Are equipment and facilities sufficient for management needs?', score1: 3, score2: 0, stage: 'Inputs', type: 'normal' },
    { id: 17, no: '16', text: 'Can staff (i.e. those with responsibility for managing the site) enforce protected area legislation and regulation?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 18, no: '17', text: 'Are systems (e.g. patrols, permits, intelligence gathering etc) in place to control access/resource use in the protected area?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 19, no: '18', text: 'Do protected area staff have safe working conditions and does management prioritise safety?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 20, no: '19', text: 'Is there a programme of management-orientated survey and research work?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 21, no: '20', text: 'Are management activities regularly monitored, evaluated and adapted?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 22, no: '21', text: 'Is active resource management being undertaken?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 23, no: '22', text: 'Is the protected area consciously managed to adapt to climate change?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 24, no: '23', text: 'Is the protected area being consciously managed to prevent carbon loss and to encourage further carbon capture?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 25, no: '24', text: 'Does management consider ecosystem service provision?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 26, no: '25', text: 'Is there a planned education programme linked to the management needs?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 27, no: '26', text: 'Is there co-operation with neighbouring land/sea State and commercial users?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 28, no: '27', text: 'Do commercial tour operators contribute to protected area management?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 29, no: '28', text: 'If fees (i.e. entry fees or fines) are applied, do they help protected area management?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 30, no: '29', text: 'Are visitor facilities and services adequate?', score1: 3, score2: 0, stage: 'Outputs', type: 'normal' },
    { id: 31, no: '30', text: 'Are Indigenous people involved in management decisions?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 32, no: '31', text: 'Do local communities living in or near the protected area have input to management decisions?', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 33, no: '31a-c', text: 'Additional points - Impact on communities', score1: 3, score2: 0, stage: 'Outputs', type: 'normal' },
    { id: 34, no: '32', text: 'Is the protected area providing sustained livelihood benefits to local communities and/or Indigenous people, e.g. income, employment, water provision, and other tangible benefits?', score1: 3, score2: 0, stage: 'Outputs', type: 'normal' },
    { id: 35, no: '33', text: 'Are the threats to the main values of the protected area being effectively addressed?', score1: 3, score2: 0, stage: 'Outputs', type: 'normal' },
    { id: 36, no: '34', text: 'Have the requirements for functional connectivity have been assessed and implemented?', score1: 3, score2: 0, stage: 'Outputs', type: 'normal' },
    { id: 37, no: '', text: 'Detailed assessment of condition and trend in values', score1: '', score2: '', stage: 'Outcomes', type: 'section' },
    { id: 38, no: '35', text: 'What is the condition of the important natural values of the protected area as compared to when it was first designated?', score1: 3, score2: 0, stage: 'Outcomes', type: 'normal' },
    { id: 39, no: '35 a-c', text: 'Additional points - Condition of natural values', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 40, no: '36', text: 'What is the condition of the important cultural values of the protected area as compared to when it was first designated?', score1: 3, score2: 0, stage: 'Outcomes', type: 'normal' },
    { id: 41, no: '36 a-c', text: 'Additional points - Condition of cultural values', score1: 3, score2: 0, stage: 'Process', type: 'normal' },
    { id: 42, no: '', text: 'Detailed assessment of key species', score1: '', score2: '', stage: 'Outcomes', type: 'section' },
    { id: 43, no: '37', text: 'Has the status of key indicator species changed over the last 5 years?', score1: 3, score2: 0, stage: 'Outcomes', type: 'normal' },
    { id: 44, no: '', text: 'Detailed assessment of habitats', score1: '', score2: '', stage: 'Outcomes', type: 'section' },
    { id: 45, no: '38', text: 'Has the status of habitats changed over the last 5 years?', score1: 3, score2: 0, stage: 'Outcomes', type: 'normal' },
  ];

  const [questions, setQuestions] = useState(() => {
    const saved = localStorage.getItem('mett_questions_data');
    return saved ? JSON.parse(saved) : initialQuestions;
  });

  // Save to localStorage whenever questions change so Dashboard can read it
  useEffect(() => {
    localStorage.setItem('mett_questions_data', JSON.stringify(questions));
  }, [questions]);

  // Handle input changes
  const handleScoreChange = (id, field, value) => {
    const updated = questions.map((q) => {
      if (q.id === id) {
        return { ...q, [field]: value === '' ? '' : Number(value) };
      }
      return q;
    });
    setQuestions(updated);
  };

  // Calculate Total Scores dynamically
  const totalScore1 = questions.reduce((acc, curr) => acc + (typeof curr.score1 === 'number' ? curr.score1 : 0), 0);
  const totalScore2 = questions.reduce((acc, curr) => acc + (typeof curr.score2 === 'number' ? curr.score2 : 0), 0);

  const getStageClass = (stage) => {
    switch (stage) {
      case 'Planning': return 'row-planning';
      case 'Process': return 'row-process';
      case 'Inputs': return 'row-inputs';
      case 'Outputs': return 'row-outputs';
      case 'Outcomes': return 'row-outcomes';
      default: return '';
    }
  };

  return (
    <div className="mett-container">
      <div className="table-responsive">
        <table className="excel-table">
          <tbody>
            {questions.map((item, index) => {
              if (item.type === 'section') {
                return (
                  <tr key={item.id} className="section-row">
                    <td className="col-no"></td>
                    <td className="col-text italic-text">{item.text}</td>
                    <td className="col-score"></td>
                    <td className="col-score"></td>
                    <td className="col-stage">{item.stage}</td>
                  </tr>
                );
              }
              return (
                <tr key={item.id} className={getStageClass(item.stage)}>
                  <td className="col-no text-center font-bold">{item.no}</td>
                  <td className="col-text">{item.text}</td>
                  <td className="col-score text-center">
                    <input
                      type="number"
                      className="score-input"
                      value={item.score1}
                      onChange={(e) => handleScoreChange(item.id, 'score1', e.target.value)}
                    />
                  </td>
                  <td className="col-score text-center">
                    <input
                      type="number"
                      className="score-input"
                      value={item.score2}
                      onChange={(e) => handleScoreChange(item.id, 'score2', e.target.value)}
                    />
                  </td>
                  <td className="col-stage">{item.stage}</td>
                </tr>
              );
            })}

            {/* Total Score Row */}
            <tr className="total-row">
              <td className="col-no text-center font-bold"></td>
              <td className="col-text font-bold">Total score</td>
              <td className="col-score text-center font-bold">{totalScore1}</td>
              <td className="col-score text-center font-bold">{totalScore2}</td>
              <td className="col-stage"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MettQuestionsScores;