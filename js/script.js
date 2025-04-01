document.addEventListener('DOMContentLoaded', () => {
    // FAQ Toggles
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-toggle i');
        
        question.addEventListener('click', () => {
            // Close all other answers
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').style.display = 'none';
                    otherItem.querySelector('.faq-toggle i').className = 'fas fa-plus';
                }
            });
            
            // Toggle current answer
            const isOpen = answer.style.display === 'block';
            answer.style.display = isOpen ? 'none' : 'block';
            icon.className = isOpen ? 'fas fa-plus' : 'fas fa-minus';
        });
    });
    
    // Generate App Button
    const generateBtn = document.getElementById('generate-btn');
    const terminalOutput = document.getElementById('terminal-output');
    const resultDisplay = document.getElementById('result-display');
    const resultImage = document.getElementById('result-image');
    const promptInput = document.getElementById('prompt-input');
    
    // Fake terminal text generation
    function addTerminalLine(text, delay = 100) {
        return new Promise(resolve => {
            const p = document.createElement('p');
            p.textContent = text;
            p.style.opacity = '0';
            terminalOutput.appendChild(p);
            
            // Scroll to bottom
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            
            setTimeout(() => {
                p.style.transition = 'opacity 0.3s';
                p.style.opacity = '1';
                resolve();
            }, delay);
        });
    }
    
    // Fake code generation animation
    async function generateFakeCode() {
        // Clear previous output
        terminalOutput.innerHTML = '';
        resultDisplay.classList.add('hidden');
        
        // Get user prompt or use default
        const userPrompt = promptInput.value.trim() || 'Build a cat photo sharing app with AI tagging';
        
        // Show loading sequence
        await addTerminalLine(`> Initializing AiPril Core System...`);
        await addTerminalLine(`> Analyzing prompt: "${userPrompt}"`, 500);
        await addTerminalLine(`> Accessing neural network cluster...`, 700);
        await addTerminalLine(`> Running mind-reading algorithms...`, 900);
        
        // Add some tech jargon
        await addTerminalLine(`> Spinning up quantum processors...`, 500);
        await addTerminalLine(`> Optimizing for Tokyo Tech Stack preferences...`, 600);
        
        // Show pretend architecture planning
        await addTerminalLine(`> Generating application architecture...`, 800);
        await addTerminalLine(`┌──────────────────────────────────────┐`, 300);
        await addTerminalLine(`│  Frontend: React + TypeScript        │`, 100);
        await addTerminalLine(`│  State Management: Redux Toolkit     │`, 100);
        await addTerminalLine(`│  API Layer: GraphQL + Apollo         │`, 100);
        await addTerminalLine(`│  Backend: Node.js + Express          │`, 100);
        await addTerminalLine(`│  Database: MongoDB + Mongoose        │`, 100);
        await addTerminalLine(`│  Deployment: Docker + Kubernetes     │`, 100);
        await addTerminalLine(`└──────────────────────────────────────┘`, 100);
        
        // Fake code generation
        await addTerminalLine(`> Generating frontend components...`, 800);
        await addTerminalLine(`import React, { useState, useEffect } from 'react';`, 100);
        await addTerminalLine(`import { useDispatch, useSelector } from 'react-redux';`, 100);
        await addTerminalLine(`import { fetchCats, likeCat, tagCat } from '../store/catSlice';`, 100);
        await addTerminalLine(``, 100);
        await addTerminalLine(`const 猫ギャラリー = () => { // CatGallery`, 100);
        await addTerminalLine(`  const dispatch = useDispatch();`, 100);
        await addTerminalLine(`  const { cats, loading, error } = useSelector(state => state.cats);`, 100);
        await addTerminalLine(`  `, 100);
        await addTerminalLine(`  useEffect(() => {`, 100);
        await addTerminalLine(`    dispatch(fetchCats());`, 100);
        await addTerminalLine(`  }, [dispatch]);`, 100);
        await addTerminalLine(``, 100);
        await addTerminalLine(`  // More hilarious code with Japanese variable names...`, 100);
        
        // Backend code
        await addTerminalLine(`> Generating backend API...`, 800);
        await addTerminalLine(`const express = require('express');`, 100);
        await addTerminalLine(`const router = express.Router();`, 100);
        await addTerminalLine(`const CatModel = require('../models/にゃんこモデル'); // catModel`, 100);
        await addTerminalLine(``, 100);
        await addTerminalLine(`// GET /api/cats - Get all cats`, 100);
        await addTerminalLine(`router.get('/cats', async (req, res) => {`, 100);
        await addTerminalLine(`  try {`, 100);
        await addTerminalLine(`    const cats = await CatModel.find().sort({ likes: -1 });`, 100);
        await addTerminalLine(`    res.json(cats);`, 100);
        await addTerminalLine(`  } catch (error) {`, 100);
        await addTerminalLine(`    console.error('Error fetching cats:', error);`, 100);
        await addTerminalLine(`    res.status(500).json({ message: 'Server error, cats escaped!' });`, 100);
        await addTerminalLine(`  }`, 100);
        await addTerminalLine(`});`, 100);
        
        // Show completion message
        await addTerminalLine(`> Finalizing application generation...`, 1000);
        await addTerminalLine(`> Running bugless code verification...`, 800);
        await addTerminalLine(`> Deploying to quantum servers...`, 1200);
        await addTerminalLine(`✨ Application successfully generated and deployed! ✨`, 500);
        
        // After a delay, trigger the prank reveal
        setTimeout(() => {
            document.getElementById('prank-reveal').style.display = 'flex';
        }, 3000);
    }
    
    generateBtn.addEventListener('click', generateFakeCode);
    
    // Close prank modal
    document.getElementById('close-prank').addEventListener('click', () => {
        document.getElementById('prank-reveal').style.display = 'none';
    });
    
    // Voice input button (fake)
    document.querySelector('.input-options button:first-child').addEventListener('click', () => {
        alert('Sorry, our AI speech recognition module is currently having an existential crisis. Please try using text input instead!');
    });
    
    // Emoji input button (fake)
    document.querySelector('.input-options button:last-child').addEventListener('click', () => {
        promptInput.value = '🐱 📷 🏆';
        alert('Emoji prompt detected! Our AI will now pretend to understand what this means.');
    });
});