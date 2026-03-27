param(
    [string[]]$LiteralPattern = @(),
    [string[]]$IncludeExtension = @('.md', '.yaml', '.yml', '.ps1', '.gitignore')
)

$defaultRegexPatterns = @(
    '(?i)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}',
    '(?<!\d)(?:\+?1[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}(?!\d)'
)

$files = Get-ChildItem -Recurse -File | Where-Object {
    $_.FullName -notmatch '\\.git\\' -and
    $_.FullName -notmatch 'example appraisals' -and
    $_.FullName -notmatch 'example client pics' -and
    $_.Name -notlike 'Foundation Cert_*' -and
    $IncludeExtension -contains $_.Extension
}

if (-not $files) {
    Write-Error "No matching files found for privacy scan."
    exit 1
}

$matchesFound = @()

foreach ($pattern in $defaultRegexPatterns) {
    $matchesFound += Select-String -Path $files.FullName -Pattern $pattern -AllMatches
}

foreach ($pattern in $LiteralPattern) {
    $matchesFound += Select-String -Path $files.FullName -Pattern $pattern -SimpleMatch
}

if ($matchesFound.Count -gt 0) {
    $matchesFound |
        Select-Object Path, LineNumber, Line |
        Format-Table -AutoSize
    exit 1
}

Write-Host "Privacy scan passed: no default regex hits or literal-pattern hits found."
