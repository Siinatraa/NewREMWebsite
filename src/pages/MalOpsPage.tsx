import { Lock, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// MalOps write-ups page

export function MalOpsPage() {
  const [expandedWriteups, setExpandedWriteups] = useState<string[]>([]);

  const toggleWriteup = (writeup: string) => {
    setExpandedWriteups(prev =>
      prev.includes(writeup)
        ? prev.filter(w => w !== writeup)
        : [...prev, writeup]
    );
  };

  return (
    <div className="content-wrapper py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 mb-6">
            <Lock className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="glow-text mb-4">MalOps Challenges</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reverse engineering challenges focusing on binary analysis and protection mechanisms
          </p>
        </div>

        {/* Write-ups List */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '100ms' }}>

          {/* ShinySpider (Medium) Write-up */}
          <div className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleWriteup('shinyspider')}
              className="w-full flex items-center justify-between text-left p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-secondary">ShinySpider (Medium)</h3>
              {expandedWriteups.includes('shinyspider') ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>

            {expandedWriteups.includes('shinyspider') && (
              <div className="p-6 space-y-8 bg-card">
                {/* Challenge Info */}
                <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary mb-3">Description</h4>
                  <p className="text-foreground/80 mb-4">
                    Your SOC detected a ransomware outbreak at 03:47 UTC affecting 300+ workstations. A sophisticated Go-compiled binary was isolated before full encryption. As lead malware analyst, you must reverse engineer this sample to uncover its evasion techniques, encryption implementation, lateral movement capabilities, and anti-forensics methods. The challenge features 25 progressive questions that will test your ability to analyze modern ransomware from basic binary fingerprinting through advanced cryptographic analysis. Perfect for SOC analysts and incident responders building real-world malware analysis skills.
                  </p>
                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-secondary mb-2">Tools Used</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-background rounded-md text-sm font-mono">DIE</span>
                      <span className="px-3 py-1 bg-background rounded-md text-sm font-mono">Ghidra</span>
                    </div>
                  </div>
                </div>

                {/* Question 1 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 1</h4>
                  <p className="text-foreground/80">Which version of the Go compiler was used to build this binary?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">go1.24.5</p>
                  </div>
                  <p className="text-foreground/70 text-sm">Off to a good start, throwing it into DIE and we get our answer</p>
                  <img src="/assets/malops/shinyspider/image_52.png" alt="DIE Output" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 2 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 2</h4>
                  <p className="text-foreground/80">What is the Relative Virtual Address (RVA) of the program's main function?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">0xdae980</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    Since the binary was stripped it removed all of its internal naming. Doing a little research I found out a neat little plugin called GoLangAnalyzer. I had to install a Go Plugin which can be found here and added it to Ghidra. This basically breaks down and renames abunch of functions to the orignal state, instead of seeing “func” it’ll be renamed to the original Go Lang Function. Pretty interesting and I had no idea this existed, I will make sure to remember this from now when analyzing Go Malware.
                  </p>
                  <p className="text-foreground/70 text-sm">Anyway with this I was able to find the main function labeled “main.main”</p>
                  <img src="/assets/malops/shinyspider/image_53.png" alt="Ghidra main function" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 3 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 3</h4>
                  <p className="text-foreground/80">In the isRunningAsAdmin function, which Windows API is the first to be resolved via the HCWin/apihash package?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">GetCurrentProcess</p>
                  </div>
                  <p className="text-foreground/70 text-sm">Going to the specific function and following the logic Ghidra is kind enough to show us the answer</p>
                  <img src="/assets/malops/shinyspider/image_54.png" alt="Ghidra GetCurrentProcess" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 4 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 4</h4>
                  <p className="text-foreground/80">The binary calls GetTokenInformation. What specific token class (by name) is being requested to verify privileges?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">TokenElevation</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    Okay so this took a little bit of research to figure out what this wanted but was able to get the answer. Ill write down the logic I took to get there. So first off searching for the syscall in the symbol tree tab will bring us to our starting point. Searching up the Microsoft documentation for Token Classes we find a list of all the Token Class names (Ex: TokenType, TokenSource, etc….). Now back to Ghidra looking at the XREF there are 3, two of which are in the same function but the other one references main.isRunningAsAdmin. Clicking on this one we see the value the value of 0x14, from Hex this is 20. Going back to our <a href="https://learn.microsoft.com/en-us/windows/win32/api/winnt/ne-winnt-token_information_class" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">microsoft documentation</a> we see count which one is number 20 and this is our answer.
                  </p>
                  <img src="/assets/malops/shinyspider/image_55.png" alt="Ghidra TokenElevation" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 5 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 5</h4>
                  <p className="text-foreground/80">Which package is responsible for configuring and executing the evasion of Event Tracing for Windows?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">HCWin/etwevasion</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    This one I had to google as I legit have no idea. This came back with several results which I searched in Ghidra until I found a match. Now I dont want this to be one and done, move on so I wanted to figure out what this. So Event Tracing in windows is what allows the EDR or AV on your computer to monitor sys calls and processes. The first half of the answer HCWin referes to the Hardware/Call Windows API which interact at the low level of the kerenal. The second half etwevasion refers to disabling the Event Tracing allowing the malware to do its thing without triggering the AV/EDR
                  </p>
                  <img src="/assets/malops/shinyspider/image_56.png" alt="Ghidra etwevasion" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 6 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 6</h4>
                  <p className="text-foreground/80">If the malware fails to retrieve the computer name via the Windows API, which environment variable does it read as a fallback to generate the system seed?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">USERNAME</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    So we start by looking for the API, in this case its called, GetComputerNameEx. I saw XREF os.hostname and thought this was the answer but not. Guessed Username and it worked. I examined the code and I just couldnt find the answer so I really dont know to find this and just got lucky
                  </p>
                  <p className="text-foreground/70 text-sm">Note: On the next question when searched the function provided you find the answer quite clearly there. I was looking at the wrong place.</p>
                  <img src="/assets/malops/shinyspider/image_57.png" alt="Ghidra USERNAME" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 7 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 7</h4>
                  <p className="text-foreground/80">The function getSystemSeed dynamically loads a DLL to access GetComputerNameW. What is the name of this DLL?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">Kernel32.dll</p>
                  </div>
                  <p className="text-foreground/70 text-sm">This was pretty simple, just looking at the function we find the DLL</p>
                  <img src="/assets/malops/shinyspider/image_58.png" alt="Ghidra Kernel32.dll" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 8 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 8</h4>
                  <p className="text-foreground/80">The malware prepends a specific string to the generated Mutex name to ensure the synchronization object is visible across all user sessions. What is this prefix?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">Global\</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    First course of action for this was to lookup what “prepends” means, according to oxford ; add (something) to the beginning of something else. I knew I saw a function relating to mutexes to I searched it up and found the function relating to it. Looking through the C Code Windows we find our answer at the bottom
                  </p>
                  <img src="/assets/malops/shinyspider/image_59.png" alt="Ghidra Global\" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 9 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 9</h4>
                  <p className="text-foreground/80">Which specific Windows error code does the checkSingleInstance function check to see if the Mutex already exists?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">0xb7</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    Again searched for the function and was parsing the code. Now looking at it I thought the answer 0x17 but it was not. You can see in the Psuedo C Code it specifically checks for 0xb7 with the “==”. This is our Answer
                  </p>
                  <img src="/assets/malops/shinyspider/image_60.png" alt="Ghidra 0xb7" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 10 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 10</h4>
                  <p className="text-foreground/80">The Hook Shield module starts a monitoring routine to check for hooks periodically. What is the time interval (in milliseconds) defined in this check?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">500</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    So my first question about this was, what is a module vs a function. When searching hookshield in Ghidra I get only functions and data sets, is a function the same as a module? Some research shows they are similar, functions are made to be used multiple times in code while modules are groupings of function. This gave me a clue on how to solve this. So the question asks for timing and looking at the functions that comes up we see “HCWin/hookshield.(*HookDetector*).StartMonitoring”, This was the first place I checked. Going back to our definitions, what were looking at is a function but not a module. Remember a module is a grouping of functions, looking at the XREF we “main.main” is referenced. The “main.main” is a grouping of functions and clicking on the XREF we find our answer. Now we see the number 50,000,000 and have to convert it to milliseconds, take a couple 0’s off and we get out answer.
                  </p>
                  <img src="/assets/malops/shinyspider/image_61.png" alt="Ghidra 500ms" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 11 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 11</h4>
                  <p className="text-foreground/80">To prevent victims from restoring files, the malware executes a specific function to remove Windows Volume Shadow Copies. What is the name of this function?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">DeleteShadowCopies</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    Now when I was looking for the answer from above I noticed a function about the VSS. Back tracking to that we see the function for deleting the Volume Shadow Copies.
                  </p>
                  <img src="/assets/malops/shinyspider/image_62.png" alt="Ghidra DeleteShadowCopies" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 12 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 12</h4>
                  <p className="text-foreground/80">How many distinct services or processes is the malware configured to terminate (kill)?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">31</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    This one I was pulling hair out and actually the second to last question I answered. I aint even gonna cap I used AI for this. I would have never gotten
                  </p>
                </div>

                {/* Question 13 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 13</h4>
                  <p className="text-foreground/80">What is the memory address of the string data for the first service in the kill list?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">0xe4c09a</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    This one I was pulling hair out and actually the last question I answered. I aint even gonna cap I used AI for this. I never would have never gotten this
                  </p>
                </div>

                {/* Question 14 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 14</h4>
                  <p className="text-foreground/80">The malware uses multiple methods to propagate to other systems. According to the string at 0xe4c09d, what is the first protocol it attempts to use for remote execution?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">WMI</p>
                  </div>
                  <p className="text-foreground/70 text-sm">This was pretty simple, just search the location in Ghidra</p>
                  <img src="/assets/malops/shinyspider/image_63.png" alt="Ghidra WMI" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 15 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 15</h4>
                  <p className="text-foreground/80">To identify vulnerable file shares for lateral movement, the malware checks for a specific open port number. What is this port?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">445</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    This one was just knowledge and expierence, it mentions in the question “share” and “lateral movement”. Nine times out of ten this is SMB, what port runs SMB, its 445. Looking at the propagation function as well we see it try to access the Admin share too
                  </p>
                  <img src="/assets/malops/shinyspider/image_64.png" alt="Ghidra Port 445" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 16 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 16</h4>
                  <p className="text-foreground/80">The malware contains a hardcoded list of files to skip to ensure the OS remains bootable. Which hidden system directory related to deleted files is explicitly excluded?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">$recycle.bin</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    So this took me a minute to find, I intially though to check the encrypt functions and went through a couple of them that looked interesting. I didn’t find anything here except the ransome note that was generated. I decided to check functions related to Files and the first one I clicked on was “main.findFiles”, Scrolling through it I saw a printf for Skip and little below that we find a .bin file that is cleverally named recyle.
                  </p>
                  <img src="/assets/malops/shinyspider/image_65.png" alt="Ghidra $recycle.bin" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 17 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 17</h4>
                  <p className="text-foreground/80">To avoid encrypting its own instructions, the malware excludes a specific filename from the encryption list. What is the name of this note file?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">R3ADME_1Vks5fYe.txt</p>
                  </div>
                  <p className="text-foreground/70 text-sm">Scrolling down a little bit farther from where we were at in the last question we find the ransome note file</p>
                  <img src="/assets/malops/shinyspider/image_66.png" alt="Ghidra Ransom Note" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 18 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 18</h4>
                  <p className="text-foreground/80">The malware uses a checksum algorithm to identify files it has already encrypted. What is the expected total length (including the dot) of the extension validated in 'isValidExtension'?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">9</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    So being kinda new to REM and figuring stuff out, I feel like how I found this answer probably was just luck. I took a guess that the weird string from the last question was the ransomeware extention, I made this educated guess due to other Ransomeware CTF’s I have done. I wanted to look at another more logical way at this, If im reading the C code correctly then param_2 should contain the extension number. Hovering over the variable it says “length 8”. Both this and the string are 8 charcters long and then add the “.” which makes the extension plus the dot equal 9, which is our answer
                  </p>
                  <img src="/assets/malops/shinyspider/image_67.png" alt="Ghidra Extension Length" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 19 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 19</h4>
                  <p className="text-foreground/80">The malware generates a random symmetric key for each file. Based on the buffer size passed to crypto/rand.Read, what is the bit length of this key?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">256</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    Going to the function crypto/rand.Read and clicking on the XREF I found the RSA public key again and hovering over the hex value on the end was 512 but it was wrong. Scrolling and looking through the code some more I found sha256.New(). This was our answer
                  </p>
                  <img src="/assets/malops/shinyspider/image_68.png" alt="Ghidra sha256" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 20 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 20</h4>
                  <p className="text-foreground/80">To secure the per-file symmetric keys, the malware encrypts them using a public key algorithm. Which specific padding scheme is used with RSA?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">OAEP</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    Google is our best friend in this but you can also find it in Ghidra. I searched in google first and typed in the answer but coincidently found the answer in the code. I would have never known this unless I found it on google
                  </p>
                  <img src="/assets/malops/shinyspider/image_69.png" alt="Ghidra OAEP" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 21 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 21</h4>
                  <p className="text-foreground/80">The malware appends a footer to encrypted files containing metadata. What 4-byte ASCII string (Magic Marker) is written at the very end of the file?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">ENDS</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    I had to use the hint for this, I couldnt find it for the life of me. Now the hint gave us 0x53444e45 and told us its in Little Endian and Convert to ASCII.
                  </p>
                  <img src="/assets/malops/shinyspider/image_70.png" alt="Little Endian Conversion" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 22 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 22</h4>
                  <p className="text-foreground/80">For large files, the malware does not encrypt the entire content to save time. What single character does it write to the file footer to indicate this mode?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">P</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    So I rememebered a printf string mentioning the size of files so I filted for encrypt in the symbol tree to find it again. Looking at the string we see “&gt; =”, this says greater than and based off of the question our answer is close. I hovered over the 0x50 that is placed by the string and when it converts to Char its a letter “P”
                  </p>
                  <img src="/assets/malops/shinyspider/image_71.png" alt="Ghidra P Char" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 23 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 23</h4>
                  <p className="text-foreground/80">The malware uses a specific Windows API function from user32.dll to apply the new wallpaper. What is the name of this function?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">SystemParametersInfoW</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    Searching the Symbol Tree for user32.dll takes us to our first location in the code. There are several XREF and only of them mention wallpaper (main.changeWallpaper). I thought this was the answer but I was wrong, clicking on the XREF and examing the function we see the clear answer
                  </p>
                  <img src="/assets/malops/shinyspider/image_72.png" alt="Ghidra SystemParametersInfoW" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 24 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 24</h4>
                  <p className="text-foreground/80">The malware uses above mentioned API to change the desktop wallpaper. What specific SPI constant (by name) is passed as the 'uiAction' argument to trigger this behavior?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">SPI_SETDESKWALLPAPER</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    So this took me a little bit to find but I figured out we need to view the microsoft documentation for this. I google the MSDN for “SystemParametersInfoW” and we found it needs to be passed several variables including a value for “uiAction”. Looking in the same area as the last question I see the hex for 0x15 and looked at the value which it coorelates to on the MSDN but I was incorrect. Reading the logic of the code we 0x14 is passed into Local_28 which is called in the API. Coorelating 0x14 with the MSDN we get out answer. To explain the logic it of the API all this all happens at the same time. So 0x15 forces the changes to the wallpaper while 0x14 changes the wallpaper, this happens all at once so you see the change immediatly if youre infected with the ransomeware
                  </p>
                  <img src="/assets/malops/shinyspider/image_73.png" alt="Ghidra SPI_SETDESKWALLPAPER 1" className="rounded-lg border border-border w-full mb-4" />
                  <img src="/assets/malops/shinyspider/image_74.png" alt="Ghidra SPI_SETDESKWALLPAPER 2" className="rounded-lg border border-border w-full" />
                </div>

                {/* Question 25 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Question 25</h4>
                  <p className="text-foreground/80">In the fallback self-destruct mechanism, the malware drops a VBScript to disk. Which Windows executable is explicitly invoked to run this script silently?</p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
                    <p className="font-mono text-sm text-secondary">wsccript.exe</p>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    So searched VBS in the Symbol Tree which was able to take me to a VBS script called cleanup.vbs, again I thought this was the answer but was wrong. I realize now it asks for a WINDOWS EXECUTABLE not a VBS Script. So I clicked on the XREF and scrolling through the code and we a legit windows executable called wscript.exe
                  </p>
                  <img src="/assets/malops/shinyspider/image_75.png" alt="Ghidra wscript.exe" className="rounded-lg border border-border w-full" />
                </div>

                {/* Review Section */}
                <div className="mt-8 p-6 bg-secondary/5 border border-secondary/20 rounded-lg">
                  <h4 className="text-xl font-bold text-secondary mb-4">Review</h4>
                  <p className="text-foreground/80 leading-relaxed">
                    This I feel like was a legit rated room at Medium. I really enjoyed this and will be doing CTF’s from MalOps again. This gave me a lot of confidence in my skills of using Ghidra. This is exactly what I wanted from CTF, a real way to test my code analysis skills. I did a lot better than I thought and also learned a good amount too about Go Binaries and Decompiling Ransomeware.
                  </p>
                </div>

                {/* What I Learned Section */}
                <div className="mt-6 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                  <h4 className="text-xl font-bold text-primary mb-4">What I Learned</h4>
                  <p className="text-foreground/80 leading-relaxed">
                    The very first thing I learned was there is a Ghidra plugin that would allow me to rename all Go Functions in the code back to what the author wrote. This made analysis significantly easier and will remember this when I analyze Go Malware in the future. I feel like this was the first “real” ransomeware sample i’ve analyzed as the ones in HTB didn’t seem to be this well written. Going through and analyzing the EDR evasion and other techniques this Malware uses. One thing I really liked from this was it needed me to do outside research on what the answers were, it gave me some practice in searching through and finding the answers within the Microsoft Documentation which before this I felt was very confusing. Overall this is great challenge which sharpened my analysis skills within Ghidra and will be doing more.
                  </p>
                </div>

                {/* Close Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => {
                      toggleWriteup('shinyspider');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-6 py-3 bg-secondary/20 hover:bg-secondary/30 text-secondary rounded-lg transition-colors font-semibold"
                  >
                    Close Write-up & Return to Top
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
