import React from 'react';

const RULES_URL = 'https://gratis-5137332.jouwweb.site/de-officiele-krachtschaak-regels';

interface HowToPlayModalProps {
    onClose: () => void;
}

const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-lg relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-2 right-3 text-2xl text-gray-400 hover:text-white" aria-label="Close how to play">&times;</button>
                <h3 className="text-2xl font-bold mb-4 text-center text-green-400">How to Play</h3>
                <div className="text-gray-200 leading-relaxed space-y-3 text-sm sm:text-base">
                    <p>
                        In <span className="font-semibold text-white">krachtschaak</span>, when piece A captures piece B, piece A can move like piece B for 1 turn. We say: Piece A "has a power".
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>You can play normal moves with the piece as much as you want and you will keep the power, but you can only use the power once.</li>
                        <li>You can't have multiple powers at once. If you captured a piece while already having a power, only the most recent power/captured piece is retained.</li>
                    </ul>
                    <p>
                        It's a king capture variant, but checkmate also still wins and stalemate still draws the game.
                    </p>
                    <p>
                        The full rules are available here in Dutch:{' '}
                        <a href={RULES_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-medium">
                            Official Krachtschaak Rules
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowToPlayModal;